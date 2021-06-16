import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/medels/student.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'studentNumber', 'email', 'action'];
  dataSource: MatTableDataSource<Student>;
  students: Student[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort

  constructor(private dbs: DatabaseService, private afs: AngularFirestore) { 
    
  }

  ngOnInit() {
    this.getDrivers()
   
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDrivers(){
    this.afs.collection("Student").snapshotChanges().subscribe(data =>{
      for(let dr of data){
        let id = dr.payload.doc.id;
        let driverdata = dr.payload.doc.data();

        let student = new Student(id, driverdata["firstname"], driverdata["lastname"], driverdata["studentNumber"], driverdata["email"]);
       
        if(!this.searchDriver(student)){
          this.dbs.students.push(student);
        }

      }

      this.dataSource = new MatTableDataSource(this.dbs.students)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  searchDriver(student: Student){
    for(let dr of this.dbs.students){
      if(dr.id == student.id){
        return true;
      }
    }
    return false;
  }
}
