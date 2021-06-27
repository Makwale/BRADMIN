
export class Slot{
    id;
    from;
    to;
    date: Date;
    busid;
    avail;
    booked;

    constructor(id, from, to, date, busid, avail, booked){
        this.id = id;

        this.from = from;

        this.to = to;

        this.date = date.toDate();

        this.busid = busid;

        this.avail = avail;

        this.booked = booked;
    }
}