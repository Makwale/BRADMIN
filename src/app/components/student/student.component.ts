import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student.model';
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
  isVisible = true;
  constructor(private dbs: DatabaseService, private afs: AngularFirestore) { 
    
  }

  ngOnInit() {
    this.dbs.getStudents()
   
  }
  ngAfterViewInit() {

    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.dbs.students)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 2000)
    
  }

  

  applyFilter(filter){
    this.dataSource.filter = filter
  }

  delete(id){
    if(confirm("Are you sure you want to delete this student?")){

      this.dbs.deleteStudent(id)
    }
  }
}
