// check that user with such name exists in array of objects
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

//const isNameExits = (name, array) => array.some(el => el.name === name);

const isNameExits = (name, array) => {
    const index = array.findIndex((el) => el.name === name);
    return index >= 0;
}

console.log(isNameExits('Gopal', users));