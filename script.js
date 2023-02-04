// create a User class
class User{
    constructor(name,email,){
        this.name = name;
        this.email = email;
    }
    logIn(){
        console.log(`${this.name} LoggedIn`);
        return this;
    }
    wellCome(){
        console.log(`Hello ${this.name}`)
        return this;
    }
    logOut(){
        console.log(`${this.name} LoggedOut`);
        return this;
    }
    goodBye(){
        console.log(`Good Bye ${this.name}`)
    }
}
// create userOne object 
const userOne = new User('Harshana',"harshana123@gmail.com");
console.log(userOne);

userOne.logIn().wellCome().logOut().goodBye();