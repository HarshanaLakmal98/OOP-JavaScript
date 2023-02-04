// ======================= basic object without class ==============================
// person object
const person ={
    // property
    firstName : "Lakmal",
    lastName : "Senewirathne",
    email : "lakmal123@gmail.com",
    // method
    fullName : function(){
        return `Full Name Is: ${this.firstName} ${this.lastName}`
    }
}
console.log(person.fullName())

// ====================== define a class ===================================
class User{
    constructor(name,password,email){
        this.name = name;
        this.password = password;
        this.email = email;
    }
};

// crate object using class
const userOne = new User('Harshana',1234,"harshana123@gamil.com");
console.log(userOne);

//  ======================= add method to class ====================

class Person{
    constructor(fname,lname,age){
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
    // create method
    fullName(){
        return `Full Name is : ${this.firstName} ${this.lastName}`
    }
}
// crate personOne object using person class

const personOne = new Person('Harshana',"lakmal",25);
console.log(personOne);
// called method 
console.log(personOne.fullName());