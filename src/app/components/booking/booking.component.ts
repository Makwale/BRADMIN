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

  displayedColumns: string[] = ['id', 'date', 'firstname', 'lastname', 'studentNumber', 'email', 'status'];
  dataSource: MatTableDataSource<Booking>;
  bookings: Booking[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort
  isVisible = true;
  constructor(private dbs: DatabaseService, private afs: AngularFirestore) { 
    
  }

  ngOnInit() {
 
    this.dbs.getBookings()
   
  }
  ngAfterViewInit() {

    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.dbs.bookings)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isVisible = false;
    }, 4000)
   
  }

  applyFilter(filter){
    this.dataSource.filter = filter
  }

}
