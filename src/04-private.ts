export class MyDate {
  //TS add this variables public as default
  public year: number;
         month: number;

        //Allow to modify the property only inside the class 
        private day: number

  //We can initialize a variable in the constructor
  constructor(year: number, month: number, day:number ){
    this.year = year
    this.month = month
    this.day = day
  }

  printFormat():string {
    //This allows to access to all elements inside the class
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`;
  }

  //We can create private methods
  //Padding don't add value if it's visible to access from outside
  private addPadding(value: number){
    if (value < 10) {
    return `0${value}`      
    }
    //Transform all to string
    return `${value}`
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

  getDate(){
    return this.day
  }

}

//We can access to the value with public declaration
const myDate = new MyDate(2023, 1, 14)
console.log(myDate.printFormat());
console.log(myDate.getDate());


