export class Animal {
  constructor(public name: string){}

  move(){
    console.log('Moving along!');
    
  }

  greeting(){
    return `Hello, I'm ${this.name}`
  }

}

export class Dog extends Animal {

  //Extends propeties
  //Name not need to be public because we only want to catch the name and sent to the global constructor with super
  constructor( name: string, public owner: string ){
  
    //Mentioned the father  property that we are inheritance
    super(name)
  }



  woof(times: number): void {
    for (let index = 0; index < times; index++) {
    console.log("woof");
    
    }
  }

}

const dante = new Animal('dante')
dante.move()
console.log(dante.greeting())

const tony = new Dog('tony', 'brayan')
tony.move()
console.log(tony.greeting())
tony.woof(3)
console.log(tony.owner)