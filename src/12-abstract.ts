import { Dog } from './09-protected';


//We add abstract in the class father Animal, to avoid create elements from a father, only to children
// const animal = new Animal ("Elite")
// animal.greeting()

const karuso = new Dog('karuso', 'brayan')
karuso.greeting()
karuso.woof(2)