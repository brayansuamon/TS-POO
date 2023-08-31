export class MyDate {

  //We can define and assign the values directly in the constructor (check previous example)
  constructor(

    // * On the constructor we need to specify the access (public or private) inside the constructor to define the scope 
    public year: number = 1999, 
    public month: number = 2,
    private day:number = 9
    ){
  
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


//We can access to the value with public declaration
const myDate2 = new MyDate()
console.log('() =>' ,myDate2.printFormat());

const myDate3 = new MyDate(2023)
console.log('(2023) =>',myDate3.printFormat());

const myDate4 = new MyDate(2023,6)
console.log('(2023, 6) =>',myDate4.printFormat());