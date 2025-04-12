const findVowel = str => {
   const vowels = ['a', 'e', 'i', 'o', 'u'];
   let counter = 0;
   for (const char of str.toLowerCase()) {
        if(vowels.includes(char)){
            counter ++;
        }
   }
   return counter;
}

console.log(findVowel('gopal'));
console.log(findVowel('dddd'));


//using reduce


const findVowel1 = str => {
    const vowels1 = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').reduce((acc, char) => {
        return vowels1.includes(char) ? acc + 1 : acc;
    }, 0)
}

console.log("using reduce method")

console.log(findVowel1('gopal'));
console.log(findVowel1('dddd'));
