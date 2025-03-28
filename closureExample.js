// create a counter function which as increment and getValue functionality

const privateCounter = () => {
    let counter = 0;
    return {
         increment : (value) => {
            counter += value;
         },
         getValue : () => {
            return counter;
         }
    }
}

let output = privateCounter();
output.increment(1);
console.log(output.getValue());
output.increment(2);
console.log(output.getValue());