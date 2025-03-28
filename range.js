// write a function to implement range
// range(1, 50);
// [1,2,3...50];
const range = (start, end) => {
    return [...Array(end).keys()].map(el => el + start);
}

console.log(range(1, 50));