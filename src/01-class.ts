const date = new Date()

date.getHours()
date.getTime()
date.toISOString()

//Send parameters
const date2 = new Date(1993,1,12) // 0 enero 11 dic
date2.getHours()
date2.getTime()
date2.toISOString()


console.log(date, date2)

let myVar;

//Inside a class we don't need to specify the scope
export class MyDate {
  year: number;
  month: number;
  day: number

  //We can initialize a variable in the constructor
  constructor(year: number, month: number, day:number ){
    this.year = year
    this.month = month
    this.day = day
  }
}


//The class require the values required in the constructor
const myDate = new MyDate(2023,6,14)
console.log(myDate);
