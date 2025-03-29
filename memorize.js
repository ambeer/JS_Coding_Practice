// design a memorization function which adds 10 to provided value and take it from cache if it was alredy calculated

const memorize = () =>{
    let cache = {};
    return (value) => {
        if(value in cache){
            console.log("fetching from cache ");
            return cache[value];
        } else {
            console.log("calculating result");
            const result = value + 10;
            cache[value] = result;
            return result;
        }
    }
}

let output = memorize();
console.log(output(9));
console.log(output(9));