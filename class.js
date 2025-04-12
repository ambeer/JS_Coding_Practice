class Parent{
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log("Name is : " + this.name);
    }
    walks(){
        console.log("Parent Walks");
    }
    static getSurName(sname){
        console.log("Parent Surname is " + `${sname}`);
    }
}
let pobject = new Parent('Gopal');
pobject.getName();
pobject.walks();
Parent.getSurName('Ambeer');

class Child extends Parent{
    constructor(pname, cname){
        super(pname);
        this.name = cname;
    }
    walks(){
        console.log("Child walks");
    }
    static getSurName(sname){
        console.log(" Child surname is " + `${sname}`);
    }
    
}
let cObject = new Child('Sneha', 'Advaith');
cObject.getName();
cObject.walks();
Child.getSurName('Ambeer');