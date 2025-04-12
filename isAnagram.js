// Write a function to check string is a anagrom 
// Anagrams are words that have the same characters in the same quantity. This means that two
// strings are anagrams if we can arrange one to get the other
// listen and silent
// rail safety and fairy tales


const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length){
        return false;
    }

    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();

    const sortedStr1 = lowerStr1.split("").sort().join("");
    const sortedStr2 = lowerStr2.split("").sort().join("");
    
    return sortedStr1 === sortedStr2;
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('ABC', 'DEF'));