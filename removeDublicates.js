// Remove all dublicates in a array

const removeDublicates = (arr) => {
    return [...new Set(arr)];
}

// const removeDublicates = (arr) => {
//     let result = [];
//     arr.forEach(element => {
//         if(!result.includes(element)){
//             result.push(element);
//         }
//     });
//     return result;
// }

// const removeDublicates = (arr) => {
//     return arr.reduce((accum, el) => {
//             return accum.includes(el) ? accum : [...accum, el];
//     }, []);
// }

let numbers = [1,1,2,3,5,5,5,7,8,3,33,8,8,33];
let output = removeDublicates(numbers);
console.log(output);
