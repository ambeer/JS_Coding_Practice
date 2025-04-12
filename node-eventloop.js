let fs = require('fs');
setTimeout(() => console.log("Hello from timer 1"), 0);
setImmediate(() => console.log( "Hello from setImmediate fn1"));
fs.readFile('input.txt', 'utf-8', (data) =>{
    //console.log(data);
    console.log("IO Pooling");
    setTimeout(() => console.log("Hello from timer 2"), 0);
    setTimeout(() => console.log("Hello fromt timer 3"), 5*1000);
    setImmediate( () => console.log("Hello from setImmediate fn2"));
})
console.log("Hello from top level code");