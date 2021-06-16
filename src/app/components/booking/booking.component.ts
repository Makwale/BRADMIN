import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Booking } from 'src/app/models/booking.model';
import { Student } from 'src/app/models/student.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'studentNumber', 'email', 'status', 'action'];
  dataSource: MatTableDataSource<Booking>;
  bookings: Booking[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort

  constructor(private dbs: DatabaseService, private afs: AngularFirestore) { 
    
  }

  ngOnInit() {
    console.log(this.dbs.bookings)
    this.dataSource = new MatTableDataSource(this.dbs.bookings)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getBookings()
   
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
       
          let booking = new Booking(id, bookingdata["slotid"], student, bookingdata["cancelled"]);

          if(!this.seachBooking(booking)){
            this.dbs.bookings.push(booking);
            this.dataSource = new MatTableDataSource(this.dbs.bookings)
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        })

      }
    })
  }

  seachBooking(booking: Booking){
    for(let dr of this.dbs.bookings){
      if(dr.id == booking.id){
        return true;
      }
    }
    return false;
  }

}
