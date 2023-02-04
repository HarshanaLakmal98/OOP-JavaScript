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