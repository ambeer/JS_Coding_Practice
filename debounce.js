// create a debounce function
const debounce = (fun, time = 1000) => {
    let timer = 0;
    return (...args) => {
        //console.log('inner function ', args);
        clearTimeout(timer);   
        timer = setTimeout(() => {
            fun.apply(this, args);
        }, time);
    }

}

const saveInput = (name) => {
    console.log("your input is => ", name);
}

let processChange = debounce(saveInput, 2000);
processChange('Gopal');