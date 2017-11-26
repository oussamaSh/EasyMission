export class Event {
    constructor (
        public id? : number ,
        public title? : string ,
        public description? : string ,        
        public startDate? : Date ,
        public endDate?  : Date ,
        public capacity? : number,
        public fee? : number,
        public typeEvent? : string,
        public visibility? : string,
        public organizerId? : number
    ){}
}