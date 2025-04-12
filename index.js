
// variable declare with var keyword is function
// variable declare with let keyword is block scope

//New key words
console.log("Variable declaration");
function sayHello(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    // old js i still accessble here if we declare i with var
    //console.log(i);
}
sayHello();

const abc =20;
console.log(abc);
//abc = 40; // you reassign const variable
console.log("===============================================");


console.log("Objects");

const person = {
    name : 'Gopal',
    getName : function(){
        console.log("this" + this);
    }
}
//person.getName();

const result = person.getName.bind(person);
console.log(result());  // this is pointing to person

const result1 = person.getName;
console.log(result1());  // this is pointing to window


console.log("arrow function");

const square = number => number * number;
console.log( square(5));
 

const jobs = [
    { id: 1, isActive : true},
    { id: 2, isActive : true},
    { id: 3, isActive : false}
]

//get only active job ids
let activeJobs = jobs.filter(item => item.isActive);
console.log(activeJobs)

console.log("this");
const person1= {
    name : 'Gopal',
    getName(){ 
        setTimeout(function() {
            console.log('this' , this);
        }, 1000)
    }
}
person1.getName();

console.log("===============================================");

console.log("maps");

let colors = ['red', 'blue', 'yellow'];

let arrayResult = colors.map(item => `<li>${item}<li>`);

console.log(arrayResult);


console.log("===============================================");


console.log("object destructuring");

const user = {
    street : 'Nallagandla',
    pincode : '500019',
    country : 'India'
}

const {street:st, pincode, country}  = user;

console.log(st + " " + pincode + " " +country);


console.log("===============================================");


console.log("spread operator");

const first = [1,2,3,4];
const second = [5,6,7,8]

const combined = [...first, 'a', ...second, 'b', 'c'];
console.log(combined);

const fObject = {name: 'Advaith'};
const pObject = {father : 'Gopal'};
const combineObject = {...fObject, ...pObject, bname : 'Viranch', mname : 'Sneha'};
console.log(combineObject);

console.log("===============================================");


console.log('Classes');


class Parent {     
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log('Name is: ' + this.name);
    }
};

class Child extends Parent {
    constructor(name, school){
        super(name);
        this.school = school;
    }
    getSchool(){
        console.log(this.name + ' is stydying in ' + this.school + " school");
    }
}

let p = new Parent('Gopal');
console.log(p.getName());

let c = new Child('Advaith', 'Ingenium');
console.log(c.getName());
console.log(c.getSchool());




 