const reverseString = (name) => {
    let arr = [...name];
    return arr.reverse().join("");
}

let outputReverse = reverseString('Gopal');
console.log(outputReverse);


const reverse = (name) => {
    return name.split("").reverse().join("");
}

let result = reverse('adivaith');
console.log(result);





// String.prototype.reverse1 = (data) => {
//     console.log(data);
//     let arr = [...this];
//     return arrr.reverse().join();
// }

// console.log("abcd".reverse1())

