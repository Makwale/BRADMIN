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

    this.slots.filter( slot => {
      if(slot.id == id){
        
        slot.from = from;
        
        slot.to = to;

        slot.date = date;

        slot.busid = busid
      }
    })
  }
  
  createBus(regno, pass, id?) {
    this.auth.isVisible = true;

    if(this.searchBusByReg(regno)){
      this.snackBar.open(`Bus with registration number ${regno} is already added`, "", {
        duration: 5000,
        horizontalPosition: "end",
        verticalPosition: 'top'
      
      })
    this.auth.isVisible = false;
      
    }else{
      if(id != "" && id != undefined){
        if(this.searchAssignedDrivers(id)){
          this.snackBar.open("Bus driver cannot be assigned to more than 1 bus", "", {
            duration: 5000,
            horizontalPosition: "end",
            verticalPosition: 'top'
          
          })
    
          this.auth.isVisible = false;
        }else{
          this.afs.collection("Bus").add({
            regno: regno,
            numPassangers: pass,
            driverid: id 
          }).then(() => {
            this.snackBar.open("Bus is added", "", {
              duration: 3000,
              horizontalPosition: "end",
              verticalPosition: 'top'
            })
            this.auth.isVisible = false
          })
      }
    }else{

      this.afs.collection("Bus").add({
        regno: regno,
        numPassangers: pass,
        driverid: ""
      }).then(() => {
        this.snackBar.open("Bus is added", "", {
          duration: 3000,
          horizontalPosition: "end",
          verticalPosition: 'top'
        })
        this.auth.isVisible = false
      })
    }

   
    }

     
  }

  searchBusByReg(regno){
    for(let bus of this.buses){
      if(bus.regno == regno){
        return true;
      }
    }
    return false;
  }

  searchAssignedDrivers(id){
    for(let bus of this.buses){
      if(bus.driverid == id){
        return true;
      }
    }

    false;
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

    this.drivers.filter( driver => {
      if(driver.id == id){
        driver.firstname = firstname;

        driver.lastname = lastname;

        driver.phone = phone
      }
    })
  }

  updateBus(id, regno, pass, drid) {

    this.auth.isVisible = true;

      if(drid != "" && drid != undefined){
        if(this.searchAssignedDrivers(drid)){
          this.snackBar.open("Bus driver cannot be assigned to more than 1 bus", "", {
            duration: 5000,
            horizontalPosition: "end",
            verticalPosition: 'top'
          
          })
          
          this.afs.collection("Bus").doc(id).update({
            regno: regno,
            numPassangers: pass,
          }).then(() => {
            this.snackBar.open("Bus is updated", "", {
              duration: 3000,
              horizontalPosition: "end",
              verticalPosition: 'top'
            })

            this.buses.filter( bus => {
              if(bus.id == id){
                bus.regno = regno;

                bus.numPassagners = pass
              }
            })
      
            this.auth.isVisible = false
          })
    
          this.auth.isVisible = false;
        }else{
  
         this.buses.filter(bus => {
            if(bus.id == id){
              bus.driverid = drid;
            }
          })
  
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
            
            this.buses.filter( bus => {
              if(bus.id == id){
                bus.regno = regno;

                bus.numPassagners = pass;
                
                bus.driverid = drid;
              }
            })

            this.auth.isVisible = false
          })
        }
      }else{
  
        this.afs.collection("Bus").doc(id).update({
          regno: regno,
          numPassangers: pass
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
 
  getDrivers(){
    
    this.afs.collection("Driver").snapshotChanges().subscribe(data =>{
      for(let dr of data){
        let id = dr.payload.doc.id;
        let driverdata = dr.payload.doc.data();

        let driver = new Driver(id, driverdata["firstname"], driverdata["lastname"], driverdata["phone"], driverdata["email"]);
       
        if(!this.searchDriver(driver)){
          this.drivers.push(driver);
        }

      }
      
    })
  }

  

  searchDriver(driver: Driver){
    for(let dr of this.drivers){
      if(dr.id == driver.id){
        return true;
      }
    }
    return false;
  }

  getBuss(){
    this.afs.collection("Bus").snapshotChanges().subscribe(data =>{
      for(let dr of data){
        let id = dr.payload.doc.id;
        let busdata = dr.payload.doc.data();
        
        if(busdata["driverid"] == "" || busdata["driverid"] == undefined){
          
          let bus = new Bus(id, busdata["regno"], "", busdata["numPassangers"]);
           
            if(!this.searchBus(bus)){
              this.buses.push(bus);

            }
         
        }else{
         
            this.afs.collection("Driver").doc(busdata["driverid"]).snapshotChanges().subscribe(data =>{
              
              let driverdata = data.payload.data();
      
              let driver = new Driver(busdata["driverid"], driverdata["firstname"], driverdata["lastname"], driverdata["phone"], driverdata["email"]);
             
              let bus = new Bus(id, busdata["regno"], driver.id, busdata["numPassangers"] );
             
              if(!this.searchBus(bus)){
             
                this.buses.push(bus);
               
              }
             
            })
        }

      }

      

    })
  }

  searchBus(bus: Bus){
    for(let dr of this.buses){
      if(dr.id == bus.id){
        return true;
      }
    }
    return false;
  }

  getslots(){
    this.afs.collection("Slot").snapshotChanges().subscribe(data =>{
      for(let dr of data){
        let id = dr.payload.doc.id;
        let slotdata = dr.payload.doc.data();

        let slot = new Slot(id, slotdata["from"], slotdata["to"], slotdata["date"], slotdata["busid"], 
        slotdata["avail"], slotdata["booked"], slotdata["delivered"]);
       
        if(!this.searchslot(slot)){
          this.slots.push(slot);
        }

      }

   
    })
  }

  searchslot(slot: Slot){
    for(let dr of this.slots){
      if(dr.id == slot.id){
        return true;
      }
    }
    return false;
  }

  getStudents(){
    this.afs.collection("Student").snapshotChanges().subscribe(data =>{
      for(let dr of data){
        let id = dr.payload.doc.id;
        let driverdata = dr.payload.doc.data();

        let student = new Student(id, driverdata["firstname"], driverdata["lastname"], driverdata["studentNumber"], driverdata["email"]);
       
        if(!this.searchStudent(student)){
          this.students.push(student);
        }

      }

    })
  }

  searchStudent(student: Student){
    for(let dr of this.students){
      if(dr.id == student.id){
        return true;
      }
    }
    return false;
  }

  getBookings(){
    this.afs.collection("Booking").snapshotChanges().subscribe(data =>{
      for(let dr of data){
        let id = dr.payload.doc.id;
        let bookingdata = dr.payload.doc.data();

        this.afs.collection("Student").doc(bookingdata["studentid"]).snapshotChanges().subscribe( data => {
          let stid = data.payload.id;
          let studentdata = data.payload.data();
          let student = new Student(stid, studentdata["firstname"], studentdata["lastname"],
           studentdata["studentNumber"], studentdata["email"]);
       
          let booking = new Booking(id, bookingdata["slotid"], student, bookingdata["cancelled"], bookingdata["date"]);

          if(!this.seachBooking(booking)){
            this.bookings.push(booking);
          }
        })

      }

    })
  }

  seachBooking(booking: Booking){
    for(let dr of this.bookings){
      if(dr.id == booking.id){
        return true;
      }
    }
    return false;
  }

  deleteAllDrivers(id) {
    this.afs.collection("Driver").doc(id).delete()
  }

  deleteAllBuses(id) {
    this.afs.collection("Bus").doc(id).delete()
  }
  deleteAllBookings(id) {
    this.afs.collection("Booking").doc(id).delete()
  }

  deleteAllSlots(id) {
    this.afs.collection("Slot").doc(id).delete()
  }
  

}
