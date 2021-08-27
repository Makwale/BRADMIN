import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private afa: AngularFireAuth,
    private acs: AccountService, public popoverController: PopoverController,
    private dbs: DatabaseService, private auth: AuthService) { }

  ngOnInit() {}

  navigate(){
    this.router.navigateByUrl("home/account")

    this.popoverController.dismiss()
  }

  signout(){
    this.router.navigateByUrl("")
    this.afa.signOut().then(res => {
      this.acs.loginStatus = false;
      this.dbs.isToolbarVisible = false;
      this.auth.isAuthorised = false;
      this.acs.user = null;
      
    })

    this.popoverController.dismiss()
  }

}
