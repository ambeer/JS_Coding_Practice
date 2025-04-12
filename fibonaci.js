// design a function which returns fibonaci sequence vallue

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

const fibonaci = (n) => {
    if(n < 2){
        return 1;
    } else {
        return fibonaci(n-2) + fibonaci(n-1);
    }
}

console.log(fibonaci(10));