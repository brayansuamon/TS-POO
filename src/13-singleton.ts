//Singleton save the first instance and don't allow more variables

export class MyService {
  static instance: MyService | null = null;

  //Private only allow access to the constructor inside the class
  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('Enter one time');

      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

//const myService1 = new MyService('Service 1');
const myService1 = MyService.create('Service 1');
console.log(myService1.getName());

// const myService2 = new MyService('Service 2');
const myService2 = MyService.create('Service 2');
console.log(myService2);

console.log(myService1 === myService2);
