import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase from 'firebase/app';

import { AngularFirestore, 
  AngularFirestoreCollection,
   AngularFirestoreDocument } from '@angular/fire/firestore';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isAuthorised: boolean = false;
  isVisible = false;
  isUpdated = false;
  constructor(private afa: AngularFireAuth, private afs: AngularFirestore,
    private acs: AccountService, private router: Router,
    private snackBar: MatSnackBar) { }

  createDriver(name: string, surname: string, phone: number, email: string, password: string) {
    this.isVisible = true
    this.afa.createUserWithEmailAndPassword( email, password).then( userCredentials => {
      let id = userCredentials.user.uid;
      this.afs.collection("Driver").doc(id).set({
        firstname: name,
        lastname: surname,
        phone: phone,
        email: email,
      }).then( res => {

        this.snackBar.open("Driver profile is created", "", {
          duration: 3000,
          horizontalPosition: "end",
          verticalPosition: 'top'
        })

        this.isVisible = false;
        
      }).catch( error => {
        
        this.snackBar.open(error.message, "", {
          duration: 3000,
          horizontalPosition: "end",
          verticalPosition: 'top'
        })
        this.isVisible = false
      })

    }).catch( error => {
      this.snackBar.open(error.message, "", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: 'top'
      })
      this.isVisible = false
    })
  }
  signin(email, password) {
    this.isVisible = true
    this.afa.signInWithEmailAndPassword(email, password).then(res => {
     
      this.afs.collection("Admin").doc(res.user.uid).snapshotChanges().subscribe(data => {

        if(data.payload.data()){
          this.isAuthorised = true
          this.isVisible = false
          !this.isUpdated ? this.router.navigateByUrl("home") : this.router.navigateByUrl("home/account")
          this.acs.user = data.payload.data()
          this.acs.user.id = res.user.uid;

        }else{
          this.isVisible = false
          !this.isUpdated ? this.router.navigateByUrl("home") : this.router.navigateByUrl("home/account")

        }
      })
    }).catch(error => {
      this.snackBar.open(error.message, "", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: 'top'
      })
      this.isVisible = false;
    })
  }
}
