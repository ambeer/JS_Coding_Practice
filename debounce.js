let getData = function(){
    console.log("call api to get the data");
}

const debounce = function(fn, d){
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() =>{
            fn.apply(context, args);
        }, 300);
    }
}


const betterFunction = debounce(getData, 300);