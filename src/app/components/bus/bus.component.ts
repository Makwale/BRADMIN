import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Bus } from 'src/app/models/bus.model';
import { Driver } from 'src/app/models/driver.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss'],
})
export class BusComponent implements OnInit {

  displayedColumns: string[] = ['id', 'regno', 'action'];
  dataSource: MatTableDataSource<Bus>;
  buses: Bus[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort

  constructor(private dbs: DatabaseService, private afs: AngularFirestore) { 
    
  }

  ngOnInit() {
    this.getBuss()
   
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getBuss(){
    this.afs.collection("Bus").snapshotChanges().subscribe(data =>{
      for(let dr of data){
        let id = dr.payload.doc.id;
        let busdata = dr.payload.doc.data();

        this.afs.collection("Driver").doc(busdata["driverid"]).snapshotChanges().subscribe(data =>{

            let driverdata = data.payload.data();
    
            let driver = new Driver(busdata["driverid"], driverdata["firstname"], driverdata["lastname"], driverdata["phone"], driverdata["email"]);
           
            let bus = new Bus(id, busdata["regno"], driver);
           
            if(!this.searchBus(bus)){
              this.dbs.buses.push(bus);
            }

            
            this.dataSource = new MatTableDataSource(this.dbs.buses)
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
           
          })


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

}
