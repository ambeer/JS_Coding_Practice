// Write code to get names from given array of users  
// Write code to get active users from given array of users
const users = [
    {
        id: 1,
        name: 'Gopal',
        isActive : true,
        age : 40
    },
    {
        id: 2,
        name: 'Viranch',
        isActive : false,
        age : 7
    },
    {
        id: 3,
        name: 'Advaith',
        isActive : true,
        age : 10
    },
    {
        id: 4,
        name: 'Sneha',
        isActive : false,
        age : 35
    }
];

//using forloop not effective solution
const activeUsers = [];
for(let i=0; i < users.length; i++){
    if( users[i].isActive){
        activeUsers.push(users[i]);
    }   
   
}
console.log("Getting active users using  forloop =>" , activeUsers);

// second solution
const activeItems = [];
users.forEach( user => {
    if(user.isActive)
        activeItems.push(user);
});
console.log("Getting active users using foreach =>" , activeItems);

//best solutions

let names = users.filter((user) => user.isActive).map( user => user.name);
console.log("Getting active users using filter and map =>" , names);



let activeUserList = users.map( user => user).filter( user => user.isActive);
console.log("Getting active users using map and filter =>" , activeUserList);
