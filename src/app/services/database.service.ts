import { Injectable } from '@angular/core';
import { Driver } from '../models/driver.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Student } from '../models/student.model';
import { Slot } from '../models/slot.model';
import { Booking } from '../models/booking.model';
import { Bus } from '../models/bus.model';

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

  constructor(private afs: AngularFirestore) { }
  
  createSlot(from, to, datetime, busid, numPassagners) {
    
    this.afs.collection("Slot").add({
      from: from,
      to: to,
      date: datetime,
      busid: busid,
      avail: numPassagners,
      booked: 0
    }).then(()=> {
      alert("Slot slot created")
    })
  }

  updateSlot(id, from, to, date: Date, busid) {
    this.afs.collection("Slot").doc(id).update({
      from: from,
      to: to,
      date: date,
      busid: busid
    }).then(() => {
      alert("Slot updated")
    })
  }
  
  createBus(regno, pass, id?) {
    this.afs.collection("Bus").add({
      regno: regno,
      numPassangers: pass,
      driverid: id? id : ""
    }).then(() => {
      alert("Bus is added")
    })
  }
  
  deleteDriver(id) {
    this.afs.collection("Driver").doc(id).delete().then(()=> {

      this.afs.collection("Bus", ref => ref.where("driverid", "==", id)).snapshotChanges().subscribe(data => {
        for(let d of data){
          this.afs.collection("Bus").doc(d.payload.doc.id).update({
            driverid: ""
          }).then( ()=> {
            alert("Driver deleted")
          })
        }

      })
    })

    this.drivers = this.drivers.filter( driver => driver.id != id)
  }

  deleteBus(id) {
    this.afs.collection("Bus").doc(id).delete().then(() => {
      alert("Bus is deleted")
      
    })

  }
  
  deletSlot(id) {
    this.afs.collection("Slot").doc(id).delete().then(() => {
      alert("Slot is deleted")
    })

    this.afs.collection("Booking", ref => ref.where("slotid", "==", id)).snapshotChanges().subscribe(data => {
      for(let d of data){
        this.afs.collection("Booking").doc(d.payload.doc.id).delete()
      }
    })

    this.slots = this.slots.filter( slot => slot.id != id)
  }

  deleteStudent(id) {
    this.afs.collection("Student").doc(id).delete().then(() => {
      alert("Student is deleted")
    })

    this.afs.collection("Booking", ref => ref.where("studentid", "==", id)).snapshotChanges().subscribe(data => {
      for(let d of data){
        this.afs.collection("Booking").doc(d.payload.doc.id).delete()
      }
    })

    this.students = this.students.filter(student => student.id != id);
  }

  updateDriver(id,firstname, lastname, phone) {
    this.afs.collection("Driver").doc(id).update({
      firstname: firstname,
      lastname: lastname,
      phone: phone
    }).then(() => {
      alert("Driver updated")
    })
  }

  updateBus(id, regno, pass, drid) {
    this.afs.collection("Bus").doc(id).update({
      regno: regno,
      numPassangers: pass,
      driverid: drid
    }).then(() => {
      alert("Bus updated")
    })
  }
 

}
