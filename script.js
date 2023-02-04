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