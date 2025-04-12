// function sortNumbers(a, b){
//     return a-b;
// }

let numbers = [2,8,3,4,1,10,20];
let result = numbers.sort((a, b) => a - b );
console.log(result);

let Person = {
    name : 'ABC',
    getName : () => {
        console.log(this);
    }
}

let abc = Person();
console.log(abc.getName());