
import { Student } from "./student.model";

export class Booking{
    id;
    slotid;
    student: Student;
    status;
    constructor(id, slotid, student, status){

        this.id = id;

        this.slotid = slotid;

        this.student = student;

        this.status = status ? "Cancelled": "";
    }
}