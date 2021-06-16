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
  createBus(arg0: any, arg1: any) {
    throw new Error('Method not implemented.');
  }
  drivers: Driver[] = [];
  students: Student[] = [];
  slots: Slot[] = [];
  bookings: Booking[] = [];
  buses: Bus[] = [];
  constructor(private afs: AngularFirestore) { }

 


}
