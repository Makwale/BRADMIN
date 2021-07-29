import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Bus } from 'src/app/models/bus.model';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-addslot',
  templateUrl: './addslot.component.html',
  styleUrls: ['./addslot.component.scss'],
})
export class AddslotComponent implements OnInit {

  signupForm: FormGroup;
 
  buses: Bus[] = [];
  dtenabled = false;
  numPassangers: number;

  constructor(private router: Router, private auth: AuthService, private dbs: DatabaseService,
    private afs: AngularFirestore, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getBuss()
    this.signupForm = new FormBuilder().group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      datetime: ['', [Validators.required,]],
      busid: ['', [Validators.required]],
 
    })

  }

  get from() { return this.signupForm.get('from')}

  get to() { return this.signupForm.get('to')}

  get datetime() { return this.signupForm.get('datetime')}

  get busid() { return this.signupForm.get('busid')}



  navigate(){
    this.router.navigateByUrl("menu/signin")
  }

  create(){



    if(new Date(this.signupForm.value["datetime"]).toLocaleDateString() < new Date().toLocaleDateString()){
      this.createSnackBar("Previous date unaccepted")
    }else if(new Date(this.signupForm.value["datetime"]).toLocaleDateString() == new Date().toLocaleDateString()){
     
      if(new Date(this.signupForm.value["datetime"]).toLocaleTimeString() <= new Date().toLocaleTimeString()){
       this.createSnackBar("Previous time unaccepted")
      }else{
        this.createSlot()
      }
    }else{
      this.createSlot()
    }

   
    
  }

  createSnackBar(message: string){
    this.snackBar.open(message, "", {
      duration: 5000,
      horizontalPosition: "end",
      verticalPosition: 'top'
    
    })
  }

  createSlot(){
     if(this.signupForm.value["from"] == this.signupForm.value["to"]){
      alert("Source and Destination cannot be the same")
    }else{

      this.dbs.createSlot(this.signupForm.value["from"], this.signupForm.value["to"],
       new Date(this.signupForm.value["datetime"]), this.signupForm.value["busid"], this.numPassangers)
   
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
