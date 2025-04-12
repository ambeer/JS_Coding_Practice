//Amazon interview questions

// let sum = function (a){
//     return function(b){
//         if(b)
//           return sum(a + b);
//         else
//           return a;
//     }
// }

//ES6 format
let sum = (a) => b => b ? sum(a+b) : a; 

let output = sum(1)(2)(3)(4)(5)(6);
console.log(output());