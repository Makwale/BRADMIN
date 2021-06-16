import { Injectable } from '@angular/core';
import { Driver } from '../medels/driver.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Student } from '../medels/student.model';
import { Slot } from '../medels/slot.model';
import { Booking } from '../medels/booking.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  drivers: Driver[] = [];
  students: Student[] = [];
  slots: Slot[] = [];
  bookings: Booking[] = [];
  constructor(private afs: AngularFirestore) { }

 


}
