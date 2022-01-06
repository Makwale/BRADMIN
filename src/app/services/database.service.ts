import { Injectable } from '@angular/core';
import { Driver } from '../models/driver.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Student } from '../models/student.model';
import { Slot } from '../models/slot.model';
import { Booking } from '../models/booking.model';
import { Bus } from '../models/bus.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';
import { AccountService } from './account.service';
import { Router } from '@angular/router';

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

  constructor(private afs: AngularFirestore, private snackBar: MatSnackBar,
    private auth: AuthService, private acs: AccountService, private router: Router) { }

  createSlot(from, to, datetime, busid, numPassagners) {
    this.auth.isVisible = true;
    this.afs.collection('Slot').add({
      from,
      to,
      date: datetime,
      busid,
      avail: numPassagners,
      booked: 0,
      delivered: ''
    }).then(() => {

      this.snackBar.open('Slot is created', '', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
      this.auth.isVisible = false;
    });
  }

  updateSlot(id, from, to, date: Date, busid) {
    this.auth.isVisible = true;

    this.afs.collection('Slot').doc(id).update({
      from,
      to,
      date,
      busid
    }).then(() => {
      this.snackBar.open('Slot is updated', '', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
      this.auth.isVisible = false;
    });

    this.slots.filter(slot => {
      if (slot.id === id) {

        slot.from = from;

        slot.to = to;

        slot.date = date;

        slot.busid = busid;
      }
    });
  }

  updateProfile(firstname, lastname, phone) {
    this.auth.isVisible = true;
    this.afs.collection('admin').doc(this.acs.user.id).update({
      firstname,
      lastname,
      phone
    }).then(() => {
      this.auth.isUpdated = true;
      this.auth.isVisible = false;
      this.snackBar.open('Profile updated', '', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'

      });

    });
  }

  createBus(regno, pass, id?) {
    this.auth.isVisible = true;

    if (this.searchBusByReg(regno)) {
      this.snackBar.open(`Bus with registration number ${regno} is already added`, '', {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'top'

      });
      this.auth.isVisible = false;

    } else {
      if (id !== '' && id !== undefined) {
        if (this.searchAssignedDrivers(id)) {
          this.snackBar.open('Bus driver cannot be assigned to more than 1 bus', '', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top'

          });

          this.auth.isVisible = false;
        } else {
          this.afs.collection('Bus').add({
            regno,
            numPassangers: pass,
            driverid: id
          }).then(() => {
            this.snackBar.open('Bus is added', '', {
              duration: 3000,
              horizontalPosition: 'end',
              verticalPosition: 'top'
            });
            this.auth.isVisible = false;
          });
        }
      } else {

        this.afs.collection('Bus').add({
          regno,
          numPassangers: pass,
          driverid: ''
        }).then(() => {
          this.snackBar.open('Bus is added', '', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
          this.auth.isVisible = false;
        });
      }


    }


  }

  searchBusByReg(regno) {
    for (const bus of this.buses) {
      if (bus.regno === regno) {
        return true;
      }
    }
    return false;
  }

  searchAssignedDrivers(id) {
    for (const bus of this.buses) {
      if (bus.driverid === id) {
        return true;
      }
    }
    return false;
  }

  deleteDriver(id) {

    this.auth.isVisible = true;

    this.afs.collection('Driver').doc(id).delete().then(() => {

      this.afs.collection('Bus', ref => ref.where('driverid', '==', id)).snapshotChanges().subscribe(data => {
        for (const d of data) {
          this.afs.collection('Bus').doc(d.payload.doc.id).update({
            driverid: ''
          }).then(() => {
            this.auth.isVisible = false;

          });
        }

      });

      this.snackBar.open('Driver is deleted', '', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
      this.auth.isVisible = false;
    });

    this.drivers = this.drivers.filter(driver => driver.id !== id);
  }

  deleteBus(id) {
    this.auth.isVisible = true;

    this.afs.collection('Bus').doc(id).delete().then(() => {
      this.snackBar.open('Bus is deleted', '', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
      this.auth.isVisible = false;
    });

  }

  deletSlot(id) {
    this.auth.isVisible = true;

    this.afs.collection('Slot').doc(id).delete().then(() => {
      this.snackBar.open('Slot is deleted', '', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
      this.auth.isVisible = true;
    });

    this.afs.collection('Booking', ref => ref.where('slotid', '==', id)).snapshotChanges().subscribe(data => {
      for (const d of data) {
        this.afs.collection('Booking').doc(d.payload.doc.id).delete();
      }
    });

    this.slots = this.slots.filter(slot => slot.id !== id);
  }

  deleteStudent(id) {
    this.auth.isVisible = true;
    this.afs.collection('Student').doc(id).delete().then(() => {
      this.snackBar.open('Student is deleted', '', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });

      this.auth.isVisible = false;
    });

    this.afs.collection('Booking', ref => ref.where('studentid', '==', id)).snapshotChanges().subscribe(data => {
      for (const d of data) {
        this.afs.collection('Booking').doc(d.payload.doc.id).delete();
      }
    });

    this.students = this.students.filter(student => student.id !== id);
  }

  updateDriver(id, firstname, lastname, phone) {
    this.auth.isVisible = true;

    this.afs.collection('driver').doc(id).update({
      firstname,
      lastname,
      phone
    }).then(() => {
      this.snackBar.open('Driver is updated', '', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });

      this.auth.isVisible = false;
    });

    this.drivers.filter(driver => {
      if (driver.id === id) {
        driver.firstname = firstname;

        driver.lastname = lastname;

        driver.phone = phone;
      }
    });
  }

  updateBus(id, regno, pass, drid) {

    this.auth.isVisible = true;

    if (drid !== '' && drid !== undefined) {
      if (this.searchAssignedDrivers(drid)) {
        this.snackBar.open('Bus driver cannot be assigned to more than 1 bus', '', {
          duration: 5000,
          horizontalPosition: 'end',
          verticalPosition: 'top'

        });

        this.afs.collection('Bus').doc(id).update({
          regno,
          numPassangers: pass,
        }).then(() => {
          this.snackBar.open('Bus is updated', '', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });

          this.buses.filter(bus => {
            if (bus.id === id) {
              bus.regno = regno;

              bus.numPassagners = pass;
            }
          });

          this.auth.isVisible = false;
        });

        this.auth.isVisible = false;
      } else {

        this.buses.filter(bus => {
          if (bus.id === id) {
            bus.driverid = drid;
          }
        });

        this.afs.collection('Bus').doc(id).update({
          regno,
          numPassangers: pass,
          driverid: drid
        }).then(() => {
          this.snackBar.open('Bus is updated', '', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });

          this.buses.filter(bus => {
            if (bus.id === id) {
              bus.regno = regno;

              bus.numPassagners = pass;

              bus.driverid = drid;
            }
          });

          this.auth.isVisible = false;
        });
      }
    } else {

      this.afs.collection('Bus').doc(id).update({
        regno,
        numPassangers: pass
      }).then(() => {
        this.snackBar.open('Bus is updated', '', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });

        this.auth.isVisible = false;
      });

    }

  }

  getDrivers() {
    this.afs.collection('driver').snapshotChanges().subscribe(data => {
      for (const dr of data) {
        const id = dr.payload.doc.id;
        const driverdata: any = dr.payload.doc.data();
        const driver = new Driver(id, driverdata.firstname, driverdata.lastname, driverdata.phone, driverdata.email);
        if (!this.searchDriver(driver)) {
          this.drivers.push(driver);
        }

      }

    });
  }



  searchDriver(driver: Driver) {
    for (const dr of this.drivers) {
      if (dr.id === driver.id) {
        return true;
      }
    }
    return false;
  }

  getBuss() {
    this.afs.collection('Bus').snapshotChanges().subscribe(data => {
      for (const dr of data) {
        const id = dr.payload.doc.id;
        const busdata: any = dr.payload.doc.data();

        if (busdata.driverid === '' || busdata.driverid === undefined) {

          const bus = new Bus(id, busdata.regno, '', busdata.numPassangers);

          if (!this.searchBus(bus)) {
            this.buses.push(bus);

          }

        } else {

          this.afs.collection('driver').doc(busdata.driverid).snapshotChanges().subscribe(drData => {

            const driverdata: any = drData.payload.data();

            const driver = new Driver(busdata.driverid, driverdata.firstname, driverdata.lastname, driverdata.phone, driverdata.email);

            const bus = new Bus(id, busdata.regno, driver.id, busdata.numPassangers);

            if (!this.searchBus(bus)) {

              this.buses.push(bus);

            }

          });
        }

      }



    });
  }

  searchBus(bus: Bus) {
    for (const dr of this.buses) {
      if (dr.id === bus.id) {
        return true;
      }
    }
    return false;
  }

  deleteAllDrivers(id) {
    this.afs.collection('Driver').doc(id).delete();
  }

  deleteAllBuses(id) {
    this.afs.collection('Bus').doc(id).delete();
  }
  deleteAllBookings(id) {
    this.afs.collection('Booking').doc(id).delete();
  }

  deleteAllSlots(id) {
    this.afs.collection('Slot').doc(id).delete();
  }


}
