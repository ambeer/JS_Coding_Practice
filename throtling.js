let throtling = function(fun, limit){
    let flag = true;
    return function(){
        if(flag){
            fun();
            flag = false;
        }
        setTimeout(()=>{
            flag = true;
        }, limit);
    }   
}