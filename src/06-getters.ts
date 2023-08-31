export class MyDate {

 
  constructor(

 
    public year: number = 1999, 
    public month: number = 2,
    //Underscore to separate this from the getters
    private _day:number = 9
    ){
  
  }

  printFormat():string {
 
    const day = this.addPadding(this._day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`;
  }


  private addPadding(value: number){
    if (value < 10) {
    return `0${value}`      
    }

    return `${value}`
  }

  add(amount: number, type: "days" | "months" | "years"){
    if(type === "days"){
      this._day += amount;
    }
    if(type === "months"){
      this.month += amount;
    }
    if(type === "years"){
      this.year += amount;
    }

  }

  //Use a getter as a method
  get day(){
    return this._day
  }

  //With get I don't need to execute with () when you use it.
  //All getters need a return
  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true
    if(this.year % 100 === 0) return false
    return this.year % 4 === 0;
  }

}


const myDate = new MyDate(2023,1,2)
//Allow to access to the variable. But, don't allow to modify
console.log( myDate.day );
console.log(myDate.isLeapYear);

const myDate2 = new MyDate(2000, 7,10)
console.log('2000', myDate2.isLeapYear);

const myDate3 = new MyDate(2002, 7,10)
console.log('2000', myDate3.isLeapYear);