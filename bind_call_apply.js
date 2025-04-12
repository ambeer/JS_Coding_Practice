// Learnings
/**
 - We can use call, bind and apply for method borrowing
 - call takes comma separated arguments, where as apply takes array
 - call and bind both are same but the difference is using call we can directly attach method on the desired
   object where as bind will return function which can be executed later part of the program
 */


let getName = function(city, school){
    console.log(this.firstName + " " + this.lastName + ' from ' + city + '. Studying in ' + school);
}

let student = {
    firstName : 'Ambeer', 
    lastName : 'Advaith'
}  

let student2 = {
    firstName : 'Ambeer', 
    lastName : 'Viranch'
}


console.log( "Using call method");
console.log( "====================================");


getName.call(student, 'Tadwai' , 'Zphs');
getName.call(student2, 'Hyderabad', 'Ingenium'); 


console.log( "Using apply method");
console.log( "====================================");

getName.apply(student, ['Tadwai', 'Zphs']);
getName.apply(student2, ['Hyderabad', 'Ingenium']);

console.log( "Using bind method");
console.log( "====================================");

let bindOutput = getName.bind(student, 'Tadwai' , 'Zphs');
bindOutput();
