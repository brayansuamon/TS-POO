// function getValue(value: number | string) {
//   return value;
// }

import { Dog } from './09-protected';

// function getValue(value: unknown) {
//   return value;
// }

//Send the types as parameters with <> before declaration
// function getValue<myType>(value: myType) {
//   const array: myType[] = [value];
//   return value;
// }

// getValue<number>(12).toFixed();

//myType2 is another value to assign
//You can change myType ---> T
function getValue<myType, myType2>(value: myType) {
  const array: myType[] = [value];
  return value;
}

getValue<number, string>(12).toFixed();
const karuso = new Dog('karuso', 'brayan');
getValue<Dog, unknown>(karuso).greeting();
