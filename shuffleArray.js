const shuffle = items =>{
    return items
        .map((item) => ({ sort: Math.random(), value : item}))
        .sort((item1, item2) => item1.sort - item2.sort)
        .map(a => a.value);
}

let output = shuffle([1,2,3,4]);
console.log(output);