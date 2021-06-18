import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Driver } from 'src/app/models/driver.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import {MatDialog} from '@angular/material/dialog';
import { DrivereditComponent } from '../driveredit/driveredit.component';
@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
  providers: [MatDialog]
})
export class DriverComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'phone', 'email', 'action'];
  dataSource: MatTableDataSource<Driver>;
  drivers: Driver[] = []
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort

  constructor(private dbs: DatabaseService, private afs: AngularFirestore, public dialog: MatDialog) { 
    
  }

  ngOnInit() {
    this.getDrivers()
   
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDrivers(){
    this.afs.collection("Driver").snapshotChanges().subscribe(data =>{
      for(let dr of data){
        let id = dr.payload.doc.id;
        let driverdata = dr.payload.doc.data();

        let driver = new Driver(id, driverdata["firstname"], driverdata["lastname"], driverdata["phone"], driverdata["email"]);
       
        if(!this.searchDriver(driver)){
          this.dbs.drivers.push(driver);
        }

      }

      this.dataSource = new MatTableDataSource(this.dbs.drivers)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  searchDriver(driver: Driver){
    for(let dr of this.dbs.drivers){
      if(dr.id == driver.id){
        return true;
      }
    }
    return false;
  }

  deleteDriver(id){
    if(confirm("Are you sure you want to delete this drive")){
      this.dbs.deleteDriver(id)
    }
  }

  applyFilter(filter){
    this.dataSource.filter = filter
  }

  openDialog(driver) {
    const dialogRef = this.dialog.open(DrivereditComponent, {
      height : "380px",
      width: "450px",
      data: driver
    });
  }
}
