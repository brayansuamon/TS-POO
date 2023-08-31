console.log('Math.PI' , Math.PI);
console.log('Math.max' , Math.max(1,3,5,7,10));

class MyMath {
  //With static we can access directly to the values
  static readonly PI = 3.14

  static max(...numbers : number[]){
    // Remove the 0 as a second parameter to avoid select 0 as a max when negative values
    return numbers.reduce((max,item) => max >= item ? max : item)
  }
}

// const math = new MyMath()
// math.PI
console.log('MyMath.PI', MyMath.PI);
// MyMath.PI = 121  We use the readonly to avoid this.
console.log('MyMath.max', MyMath.max(1,4,3,9));

//Send an array numbers
const numbers = [1,4,3,4]
console.log('MyMath.max', MyMath.max(...numbers));

console.log('MyMath.max', MyMath.max(-1,-4,-3,-9));
