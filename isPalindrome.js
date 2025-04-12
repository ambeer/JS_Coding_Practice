const isPalindrome = str => {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome('test'));
console.log(isPalindrome('fof'));