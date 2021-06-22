import { Injectable } from '@angular/core';
import { Driver } from '../models/driver.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Student } from '../models/student.model';
import { Slot } from '../models/slot.model';
import { Booking } from '../models/booking.model';
import { Bus } from '../models/bus.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
 
  drivers: Driver[] = [];
  students: Student[] = [];
  slots: Slot[] = [];
  bookings: Booking[] = [];
  buses: Bus[] = [];
  isToolbarVisible = false;

  constructor(private afs: AngularFirestore, private snackBar: MatSnackBar, private auth: AuthService) { }
  
  createSlot(from, to, datetime, busid, numPassagners) {
    this.auth.isVisible = true;
    this.afs.collection("Slot").add({
      from: from,
      to: to,
      date: datetime,
      busid: busid,
      avail: numPassagners,
      booked: 0
    }).then(()=> {
  
      this.snackBar.open("Slot is created", "", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: 'top'
      })
      this.auth.isVisible = false;
    })
  }

  updateSlot(id, from, to, date: Date, busid) {
    this.auth.isVisible = true;

    this.afs.collection("Slot").doc(id).update({
      from: from,
      to: to,
      date: date,
      busid: busid
    }).then(() => {
      this.snackBar.open("Slot is updated", "", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: 'top'
      })
      this.auth.isVisible = false
    })
  }
  
  createBus(regno, pass, id?) {
    this.auth.isVisible = true;

    this.afs.collection("Bus").add({
      regno: regno,
      numPassangers: pass,
      driverid: id? id : ""
    }).then(() => {
      this.snackBar.open("Bus is added", "", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: 'top'
      })
      this.auth.isVisible = false
    })
  }
  
  deleteDriver(id) {

    this.auth.isVisible = true;

    this.afs.collection("Driver").doc(id).delete().then(()=> {
      
      this.afs.collection("Bus", ref => ref.where("driverid", "==", id)).snapshotChanges().subscribe(data => {
        for(let d of data){
          this.afs.collection("Bus").doc(d.payload.doc.id).update({
            driverid: ""
          }).then( ()=> {
            this.auth.isVisible = false
            
          })
        }

      })

      this.snackBar.open("Driver is deleted", "", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: 'top'
      })
      this.auth.isVisible = false;
    })

    this.drivers = this.drivers.filter( driver => driver.id != id)
  }

  deleteBus(id) {
    this.auth.isVisible = true;

    this.afs.collection("Bus").doc(id).delete().then(() => {
      this.snackBar.open("Bus is deleted", "", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: 'top'
      })
      this.auth.isVisible = false;
    })

  }
  
  deletSlot(id) {
    this.auth.isVisible = true;

    this.afs.collection("Slot").doc(id).delete().then(() => {
      this.snackBar.open("Slot is deleted", "", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: 'top'
      })
      this.auth.isVisible = true;
    })

    this.afs.collection("Booking", ref => ref.where("slotid", "==", id)).snapshotChanges().subscribe(data => {
      for(let d of data){
        this.afs.collection("Booking").doc(d.payload.doc.id).delete()
      }
    })

    this.slots = this.slots.filter( slot => slot.id != id)
  }

  deleteStudent(id) {
    this.auth.isVisible = true;
    this.afs.collection("Student").doc(id).delete().then(() => {
      this.snackBar.open("Student is deleted", "", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: 'top'
      })

      this.auth.isVisible = false;
    })

    this.afs.collection("Booking", ref => ref.where("studentid", "==", id)).snapshotChanges().subscribe(data => {
      for(let d of data){
        this.afs.collection("Booking").doc(d.payload.doc.id).delete()
      }
    })

    this.students = this.students.filter(student => student.id != id);
  }

  updateDriver(id,firstname, lastname, phone) {
    this.auth.isVisible = true;

    this.afs.collection("Driver").doc(id).update({
      firstname: firstname,
      lastname: lastname,
      phone: phone
    }).then(() => {
      this.snackBar.open("Driver is updated", "", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: 'top'
      })

      this.auth.isVisible = false;
    })
  }

  updateBus(id, regno, pass, drid) {

    this.auth.isVisible = true;

    this.afs.collection("Bus").doc(id).update({
      regno: regno,
      numPassangers: pass,
      driverid: drid
    }).then(() => {
      this.snackBar.open("Bus is updated", "", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: 'top'
      })

      this.auth.isVisible = false
    })
  }
 

}
