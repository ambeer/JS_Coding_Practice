// design a deep copy function

const typeOf = (input) => {
    const rawObject = Object.prototype.toString.call(input).toLowerCase();
    //console.log(rawObject);
    const typeOfRegex = /\[object (.*)]/g;
    const type = typeOfRegex.exec(rawObject)[1];     
    return type;
}
const deepCopy = (source, target) => {
    if(typeOf(source) !== typeOf(target)){
        return false;
    }
    if(typeOf(source) === 'array'){
         if(source.length !== target.length){
            return false;
         }
         return source.every((el, index) => deepCopy(el, target[index]));
    }

    if(typeOf(source) === 'object'){
        if(Object.keys(source).length !== Object.keys(target).length){
            return false;
        }
        return Object.keys(source).every((key) => deepCopy(source[key],target[key]));
    }

    if(typeOf(source) === 'date'){
        return source.getTime() === target.getTime();
    }

    return source === target;
}

console.log(deepCopy([1,2,[3,4]], [1,2, [3,4]]));
console.log(deepCopy({a:{b : 'c'}}, {a:{b:'c'}}));
