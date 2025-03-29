// write a function which helps to achieve multiply(a)(b) and returns product of a and b
const multiply = (num1) => { 
    return (num2) => {
        return num1 * num2;
    }
}

let output = multiply(3)(5);
console.log(output);