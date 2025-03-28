// 1. Write code to get names from given array of users  
// 2. getback only active users from given array of users
// 3. Sort users by age decending
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

// best solution

let usersList = users
                .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
                .filter((user) => user.isActive)
                .map((user) => user.name);

console.log("User list ", usersList);
