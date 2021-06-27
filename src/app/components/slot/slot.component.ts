import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Slot } from 'src/app/models/slot.model';
import { DatabaseService } from 'src/app/services/database.service';
import { SloteditComponent } from '../slotedit/slotedit.component';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss'],
})
export class SlotComponent implements OnInit {

  displayedColumns: string[] = ['id', 'from', 'to', 'avail', 'booked', 'date', 'action'];
  dataSource: MatTableDataSource<Slot>;
  slots: Slot[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort
  isVisible = true;

  constructor(private dbs: DatabaseService, private afs: AngularFirestore , public dialog: MatDialog) { 
    
  }

  ngOnInit() {

    this.dbs.getslots()
   
  }

  ngAfterViewInit() {

    setTimeout(()=> {
      this.dataSource = new MatTableDataSource(this.dbs.slots)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isVisible = false;
    },2000)
  }

 
  applyFilter(filter){
    this.dataSource.filter = filter
  }

  delete(id){
    if(confirm("Are you sure you want to delete this slot?")){this.dbs.deletSlot(id)}
  }

  openDialog(slot) {
    const dialogRef = this.dialog.open(SloteditComponent, {
      height : "440px",
      width: "500px",
      data: slot
    });
  }

}
