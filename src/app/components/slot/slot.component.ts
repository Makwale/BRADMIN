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
    this.getslots()
   
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getslots(){
    this.afs.collection("Slot").snapshotChanges().subscribe(data =>{
      for(let dr of data){
        let id = dr.payload.doc.id;
        let slotdata = dr.payload.doc.data();

        let slot = new Slot(id, slotdata["from"], slotdata["to"], slotdata["date"], slotdata["busid"], 
        slotdata["avail"], slotdata["booked"]);
       
        if(!this.searchslot(slot)){
          this.dbs.slots.push(slot);
        }

      }

      this.dataSource = new MatTableDataSource(this.dbs.slots)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.isVisible = false;
    })
  }

  searchslot(slot: Slot){
    for(let dr of this.dbs.slots){
      if(dr.id == slot.id){
        return true;
      }
    }
    return false;
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
