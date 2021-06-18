import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bus } from 'src/app/models/bus.model';
import { Driver } from 'src/app/models/driver.model';
import { Slot } from 'src/app/models/slot.model';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-slotedit',
  templateUrl: './slotedit.component.html',
  styleUrls: ['./slotedit.component.scss'],
})
export class SloteditComponent implements OnInit {

  signupForm: FormGroup;
 
  buses: Bus[] = [];
  dtenabled = false;
  numPassangers: number;

  constructor(private df: MatDialogRef<Slot>, private router: Router, private auth: AuthService, private dbs: DatabaseService,
    private afs: AngularFirestore,  @Inject(MAT_DIALOG_DATA) public slot: Slot) { }

  ngOnInit() {
    this.getBuss()
    this.signupForm = new FormBuilder().group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      datetime: ['', [Validators.required]],
      busid: ['', [Validators.required]],
 
    })

    this.signupForm.controls["from"].setValue(this.slot.from)
    this.signupForm.controls["to"].setValue(this.slot.to)
    this.signupForm.controls["datetime"].setValue(this.slot.date)
    this.signupForm.controls["busid"].setValue(this.slot.busid)
    

  }

  get from() { return this.signupForm.get('from')}

  get to() { return this.signupForm.get('to')}

  get datetime() { return this.signupForm.get('datetime')}

  get busid() { return this.signupForm.get('busid')}




  save(){

    if(this.signupForm.value["from"] == this.signupForm.value["to"]){
      alert("Source and Destination cannot be the same")
    }else{

      this.dbs.updateSlot(this.slot.id,this.signupForm.value["from"], this.signupForm.value["to"],
       new Date(this.signupForm.value["datetime"]), this.signupForm.value["busid"])
   
    }
    
  }


  dtEnable(){
    this.dtenabled = true;

  }


  getBuss(){
    this.afs.collection("Bus").snapshotChanges().subscribe(data =>{
      for(let dr of data){
        let id = dr.payload.doc.id;
        let busdata = dr.payload.doc.data();

        let busid = new Bus(id, busdata["regno"],busdata["driverid"], busdata["numPassangers"] );
        
        if(!this.searchBus(busid)){
          this.buses.push(busid);
        }
      }

    })
  }

  getNumPass(){
 
    for(let bus of this.buses){
      if(bus.id == this.signupForm.value["busid"]){
        this.numPassangers = bus.numPassagners;
      }
    }
 
  }

  searchBus(busid: Bus){
    for(let dr of this.buses){
      if(dr.id == busid.id){
        return true;
      }
    }
    return false;
  }


}
