import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private dbs: DatabaseService, private auth : AuthService ) {
    dbs.isToolbarVisible
  }
}
