export class MyDate {
  //TS add this variables public as default
  public year: number;
  public month: number;
        day: number

  //Readonly don't allow tdo do changes, but break the rules inside some methods
  // readonly day: number

  //We can initialize a variable in the constructor
  constructor(year: number, month: number, day:number ){
    this.year = year
    this.month = month
    this.day = day
  }

  printFormat():string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: "days" | "months" | "years"){
    if(type === "days"){
      this.day += amount;
    }
    if(type === "months"){
      this.month += amount;
    }
    if(type === "years"){
      this.year += amount;
    }

  }

}

//We can access to the value with public declaration
const myDate = new MyDate(2023, 1, 14)
console.log(myDate.day);
myDate.day = 12
console.log(myDate.day);
