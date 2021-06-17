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

  createBus(regno, pass, id?) {
    this.afs.collection("Bus").add({
      regno: regno,
      numPassangers: pass,
      driverid: id? id : ""
    }).then(() => {
      alert("Bus is added")
    })
  }


}
