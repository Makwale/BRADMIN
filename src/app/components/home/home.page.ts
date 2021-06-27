import { AfterViewInit, Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { jsPDF } from "jspdf";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[ MatDialog]
})
export class HomePage implements AfterViewInit{

  constructor(private dbs: DatabaseService) {}

  ngOnInit(){
    this.dbs.getDrivers();
    this.dbs.getBuss();
    this.dbs.getslots();
    this.dbs.getStudents()
  }

  ngAfterViewInit(){
    this.dbs.isToolbarVisible = true;
  }

  generate(cat){
    let name;
    let report;
    const doc = new jsPDF({
      orientation: 'l',
    });
    let index = 1;
    
    if(cat == 'd'){
      name = "Drivers Report.pdf"

      doc.cell(10,10,110,10,"Id".toUpperCase(), index, "left")
      doc.cell(10,10,55,10,"First Name".toUpperCase(), index, "left")
      doc.cell(10,10,55,10,"Last Name".toUpperCase(), index, "left")
      doc.cell(10,10,55,10,"Phone No".toUpperCase(), index, "left")
        
      index++;

      for(let driver of this.dbs.drivers){

        doc.cell(10,10,110,10,driver.id, index, "left")
        doc.cell(10,10,55,10,driver.firstname.toUpperCase(), index, "left")
        doc.cell(10,10,55,10,driver.lastname.toUpperCase(), index, "left")
        doc.cell(10,10,55,10,`0${driver.phone}`, index, "left")
        
    
        index++;
      }
      


    }else if(cat == 'b'){

      console.log(this.dbs.buses)

      name = "Buses Report.pdf"

      doc.cell(10,10,110,10,"Id".toUpperCase(), index, "left")
      doc.cell(10,10,80,10,"Registration No".toUpperCase(), index, "left")
        
      index++;

      for(let bus of this.dbs.buses){

        doc.cell(10,10,110,10,bus.id, index, "left")
        doc.cell(10,10,80,10,bus.regno, index, "left")
        index++;
      }

    }else if(cat == 'sl'){

      console.log(this.dbs.slots)

      name = "Slots Report.pdf"


      doc.cell(10,10,80,10,"Id".toUpperCase(), index, "left")
      doc.cell(10,10,55,10,"From".toUpperCase(), index, "left")
      doc.cell(10,10,55,10,"To".toUpperCase(), index, "left")
      doc.cell(10,10,70,10,"Date & time".toUpperCase(), index, "left")
        
      index++;

      for(let slot of this.dbs.slots){

        doc.cell(10,10,80,10,slot.id, index, "left")
        doc.cell(10,10,55,10,slot.from.toUpperCase(), index, "left")
        doc.cell(10,10,55,10,slot.to.toUpperCase(), index, "left")
        doc.cell(10,10,70,10,slot.date.toLocaleString(), index, "left")
        
    
        index++;
      }

    }else if(cat == 'st'){

     
      name = "Students Report.pdf"


      doc.cell(10,10,110,10,"Id".toUpperCase(), index, "left")
      doc.cell(10,10,55,10,"First Name".toUpperCase(), index, "left")
      doc.cell(10,10,55,10,"Last Name".toUpperCase(), index, "left")
      doc.cell(10,10,55,10,"Student No".toUpperCase(), index, "left")
        
      index++;

      for(let student of this.dbs.students){

        doc.cell(10,10,110,10,student.id, index, "left")
        doc.cell(10,10,55,10,student.firstname.toUpperCase(), index, "left")
        doc.cell(10,10,55,10,student.lastname.toUpperCase(), index, "left")
        doc.cell(10,10,55,10,student.studentNumber ? String(student.studentNumber) : "N/A", index, "left")
        
    
        index++;
      }

    }


    doc.save(name)

    
  }
  

}
