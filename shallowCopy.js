// design a shallow copy function

const typeOf = (input) => {
    const rawObject = Object.prototype.toString.call(input).toLowerCase();
    //console.log(rawObject);
    const typeOfRegex = /\[object (.*)]/g;
    const type = typeOfRegex.exec(rawObject)[1];     
    return type;
}
const shallowCopy = (source, target) => {
    if(typeOf(source) !== typeOf(target)){
        return false;
    }
    if(typeOf(source) === 'array'){
         if(source.length !== target.length){
            return false;
         }
         return source.every((el, index) => el === target[index]);
    }

    if(typeOf(source) === 'object'){
        if(Object.keys(source).length !== Object.keys(target).length){
            return false;
        }
        return Object.keys(source).every((key) => source[key] === target[key]);
    }
    return source === target;
}

console.log(shallowCopy([1,2], [1,2]));
console.log(shallowCopy({a:'a'}, {a:'a'}));
