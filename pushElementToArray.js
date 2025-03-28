const addElementToArray = (arr, element) => {
    return [...arr, element];
}
let originalArray = [1,2,3];
let numberArray = addElementToArray(originalArray, 5);

console.log("OriginalArray", originalArray);
console.log("NewArray", numberArray);
