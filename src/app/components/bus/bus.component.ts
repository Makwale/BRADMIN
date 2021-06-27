import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Bus } from 'src/app/models/bus.model';
import { Driver } from 'src/app/models/driver.model';
import { DatabaseService } from 'src/app/services/database.service';
import { BuseditComponent } from '../busedit/busedit.component';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss'],
})
export class BusComponent implements OnInit {

  displayedColumns: string[] = ['id', 'regno', 'numPassagners', 'action'];
  dataSource: MatTableDataSource<Bus>;
  buses: Bus[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort
  isVisible = true;
  constructor(private dbs: DatabaseService, private afs: AngularFirestore, public dialog: MatDialog) { 
    
  }

  ngOnInit() {
    this.dbs.getBuss()
   
  }
  ngAfterViewInit() {

    setTimeout(()=> {
      this.dataSource = new MatTableDataSource(this.dbs.buses)
       
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isVisible = false;
    }, 2000)
    
  }

  
  applyFilter(filter){
    this.dataSource.filter = filter;
  }

  deleteBus(id){
    if(confirm("Are you sure you want to delete this bus?")){

      this.dbs.buses = this.dbs.buses.filter( bus => bus.id != id)

      this.dbs.deleteBus(id);
    }
  }

  openDialog(bus) {
    const dialogRef = this.dialog.open(BuseditComponent, {
      height : "370px",
      width: "450px",
      data: bus
    });
  }

}
