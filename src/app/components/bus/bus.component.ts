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

  constructor(private dbs: DatabaseService, private afs: AngularFirestore, public dialog: MatDialog) { 
    
  }

  ngOnInit() {
    this.getBuss()
   
  }
  ngAfterViewInit() {
    this.sortAndPaginater()
  }

  getBuss(){
    this.afs.collection("Bus").snapshotChanges().subscribe(data =>{
      for(let dr of data){
        let id = dr.payload.doc.id;
        let busdata = dr.payload.doc.data();
        
        if(busdata["driverid"] == "" || busdata["driverid"] == undefined){
          
          let bus = new Bus(id, busdata["regno"], "", busdata["numPassangers"]);
           
            if(!this.searchBus(bus)){
              this.dbs.buses.push(bus);
              this.sortAndPaginater()

            }
         
        }else{
         
            this.afs.collection("Driver").doc(busdata["driverid"]).snapshotChanges().subscribe(data =>{
              
              let driverdata = data.payload.data();
      
              let driver = new Driver(busdata["driverid"], driverdata["firstname"], driverdata["lastname"], driverdata["phone"], driverdata["email"]);
             
              let bus = new Bus(id, busdata["regno"], driver.id, busdata["numPassangers"] );
             
              if(!this.searchBus(bus)){
             
                this.dbs.buses.push(bus);
                this.sortAndPaginater()
              }
             
            })
        }

        
      }

      

    })
  }

  searchBus(bus: Bus){
    for(let dr of this.dbs.buses){
      if(dr.id == bus.id){
        return true;
      }
    }
    return false;
  }

  applyFilter(filter){
    this.dataSource.filter = filter;
  }

  sortAndPaginater(){
        this.dataSource = new MatTableDataSource(this.dbs.buses)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

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
