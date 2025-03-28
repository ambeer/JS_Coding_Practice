// write a function to concatinate two arrays
const arrayConcate = (array1, array2) =>{
    //return array1.concat(...array2);
    return [...array1, ...array2];
}

let array1 = [1,2,3];
let array2 = [4];

let output  = arrayConcate(array1, array2);
console.log("Result After merging two arrays" , output); 