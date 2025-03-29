// Design a class for employee which takes id and name in during construction object and has salary property
class Employee {
    constructor(id, name){
        if(!id || !name){
            throw new Error('Employee id and name are mandatory');
        }
        this.id = id;
        this.name = name;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name
    }
    setSalary(salary){
        this.salary = salary;
    }
    getSalary(){
        return this.salary;
    }
}

let employee = new Employee(100, 'Gopal');
employee.setSalary(1000);
console.log(employee);


class Manager extends Employee{
    setDepartment(department){
        this.department = department;
    }
    getDepartment(){
        return this.department;
    }
}

let manager = new Manager(200, 'Advaith');
manager.setDepartment('Development');
console.log(manager);