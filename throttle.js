// create a debounce function
const throttle = (fun, time = 1000) => {
    let isWaiting = false;
    return (...args) => {
        if(!isWaiting){
            fun.apply(this, args);
            isWaiting = true;
        }
        setTimeout(() => {
            isWaiting = false;
        }, time);
    }
}

const saveInput = (name) => {
    console.log("your input is => ", name);
}

let processChange = throttle(saveInput, 2000);
processChange('Gopal');

setTimeout(() => {
    processChange('Rao');
}, 3000);