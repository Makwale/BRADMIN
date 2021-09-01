import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Booking } from 'src/app/models/booking.model';
import { DatabaseService } from 'src/app/services/database.service';
import { jsPDF } from "jspdf";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Slot } from 'src/app/models/slot.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-slotbooking',
  templateUrl: './slotbooking.page.html',
  styleUrls: ['./slotbooking.page.scss'],
})
export class SlotbookingPage implements OnInit {
  
  displayedColumns: string[] = ['id', 'date', 'firstname', 'lastname', 'studentNumber', 'email', 'status'];
  dataSource: MatTableDataSource<Booking>;
  bookings: Booking[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort
  isVisible = true;
  selected = false;
  isIndeterminate = false;
  selecedtAll = false;

  constructor(private df: MatDialogRef<Slot>, private router: Router, private auth: AuthService, private dbs: DatabaseService,
    private afs: AngularFirestore,  @Inject(MAT_DIALOG_DATA) public slot: Slot,
    private snackBar: MatSnackBar) { 
    
  }

  ngOnInit() {
   
  }

  ngAfterViewInit() {

    this.dataSource = new MatTableDataSource(this.dbs.bookings.filter(booking => booking.slotid == this.slot.id))

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  
    
  }
  

  applyFilter(filter){
    this.dataSource.filter = filter
    this.selected = false;
    this.selecedtAll = false;
    this.bookings = [];
    this.isIndeterminate = false;
  }

  select(checked, id){

    this.isIndeterminate = true
    this.selecedtAll = false;
    if(checked){
      this.bookings.push(this.dataSource.filteredData.find(booking => booking.id ==id))
    }else{
      this.bookings = this.bookings.filter(booking => booking.id != id)
    }

    if(this.bookings.length == this.dataSource.filteredData.length){
      this.isIndeterminate = false
      this.selecedtAll = true;
    }

    if(this.bookings.length == 0){
      this.selecedtAll = false;
      this.isIndeterminate = false
    }
    
  }

 

  

}
