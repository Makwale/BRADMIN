import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bus } from 'src/app/models/bus.model';
import { Driver } from 'src/app/models/driver.model';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-busedit',
  templateUrl: './busedit.component.html',
  styleUrls: ['./busedit.component.scss'],
})
export class BuseditComponent implements OnInit {

  signupForm: FormGroup;
  enregno = false;
  ennumpassengers = false;
  drivers: Driver[] = [];
 

  constructor(private router: Router, private auth: AuthService, 
    private dbs: DatabaseService, private afs: AngularFirestore,
    private df: MatDialogRef<Bus>, @Inject(MAT_DIALOG_DATA) public bus: Bus) { }

  ngOnInit() {
    this.getDrivers()
    this.signupForm = new FormBuilder().group({
      regno: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*[0-9-]*[a-zA-Z ]*')]],
      numPassengers: ['', [Validators.required]],
      driverid: ['']
    })

    this.signupForm.controls["regno"].setValue(this.bus.regno)
    this.signupForm.controls["driverid"].setValue(this.bus.driverid)
    this.signupForm.controls["numPassengers"].setValue(Number(this.bus.numPassagners))
    
  }

  get regno() { return this.signupForm.get('regno')}

  get numPassengers() { return this.signupForm.get('numPassengers')}



  save(){

      this.dbs.updateBus(this.bus.id,this.signupForm.value["regno"], this.signupForm.value["numPassengers"] ,this.signupForm.value["driverid"])
    
  }

  regEnable(){
    this.enregno = true;
  }

  numPassEnable(){
    this.ennumpassengers = true;
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

}
