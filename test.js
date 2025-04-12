const numbers = [10,20,20,1,1,2,3,4,5];
const output = [... new Set(numbers)];

let object = {}

for (let index = 0; index < numbers.length; index++) {
    object[numbers[index]] = object[numbers[index]];
}

console.log(Object.keys(object));

//console.log(output);

(function(){
    var a = b =5;
})();
//console.log(a + " value a");
console.log(b + " value b");



const reverseString = (name) => {
    let arr = [...name];
    return arr.reverse().join("");
}

let outputReverse = reverseString('abcd');
console.log(outputReverse);
