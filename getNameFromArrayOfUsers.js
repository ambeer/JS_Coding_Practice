// Write code to get names from given array of users  
const users = [
    {
        id: 1,
        name: 'Gopal',
        isActive : true,
    },
    {
        id: 2,
        name: 'Viranch',
        isActive : false,
    },
    {
        id: 3,
        name: 'Advaith',
        isActive : true,
    },
    {
        id: 4,
        name: 'Sneha',
        isActive : false,
    }
];

//  First Solution which is not efficient
const names = [];
for(let i=0; i < users.length; i++){
    names.push(users[i].name);
}
console.log("Getting names using  forloop =>" , names);

// second solution
const unames = [];
users.forEach( user => {
   unames.push(user.name);
});
console.log("Getting names using  array filter =>" , unames);

//best solution
let userNames = users.map( user => user.name);
console.log("Getting names using  map =>" , userNames);



