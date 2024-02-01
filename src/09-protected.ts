export abstract class Animal {
  //Don't modify and you can access to it inside the internal classes (inheritance)
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  //Only can access to the childs not outside.
  protected doSomething() {
    console.log('dooo');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    // --> only can call from the contructor of child
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
    this.doSomething();
  }

  //Defining an specific method for dog
  move(): void {
    console.log('moving as a dog');
    //Using the method of animal
    super.move();
  }
}

const tony = new Dog('tony', 'brayan');
// tony.dosomething()
tony.woof(1);
tony.greeting();
tony.move();
