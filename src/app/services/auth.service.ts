import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase from 'firebase/app';

import { AngularFirestore, 
  AngularFirestoreCollection,
   AngularFirestoreDocument } from '@angular/fire/firestore';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private afa: AngularFireAuth, private afs: AngularFirestore,
    private acs: AccountService, private router: Router, private dbs: DatabaseService) { }

  createDriver(name: string, surname: string, phone: number, email: string, password: string) {
   
    this.afa.createUserWithEmailAndPassword( email, password).then( userCredentials => {
      let id = userCredentials.user.uid;
      this.afs.collection("Driver").doc(id).set({
        firstname: name,
        lastname: surname,
        phone: phone,
        email: email,
      }).then( res => {
        
        alert("Bus driver profile created")
      }).catch( error => {
        alert( error.message)

      })

    }).catch( error => {
      alert(error.message)
    })
  }
}
