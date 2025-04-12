// Learnings
/**
  - Function currying is a technique for converting a function which takes multiple arguments to a function takes single arguments
  - We can implement function currying in two ways
     - using bind method
     - using clousures
 */

// Function currying using bind

console.log("Function currying using bind");
console.log("================================");

var multiply = function(x, y){
    console.log(x*y);
}

var multiplybyTwo = multiply.bind(this);
multiplybyTwo(5, 2);

let multipleByThree = multiply.bind(this, 5, 3);
multipleByThree();

// Function currying using clousure

console.log("Function currying using clousure");
console.log("================================");

function multiplication(y){
    return function(x){
        console.log(x*y);
    }
}

let output = multiplication(5);
output(2);

let output1 = multiplication(5);
output1(3);