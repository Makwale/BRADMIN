import { AfterViewInit, Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{

  constructor(private dbs: DatabaseService) {}

  ngOnInit(){

  }

  ngAfterViewInit(){
    this.dbs.isToolbarVisible = true;
  }
  

}
