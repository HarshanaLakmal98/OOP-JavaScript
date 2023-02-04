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
   
    logOut(){
        console.log(`${this.name} LoggedOut`);
        return this;
    }
  
}
// create userOne object 
const userOne = new User('Harshana',"harshana123@gmail.com");
console.log(userOne);

userOne.logIn().logOut()


// ========================= Inheritance =================================
class NewUser extends User{
    welcome(){
        console.log(`Warmly Welcome ${this.name}`)
        return this;
    }
    goodBye(){
        return `Good Bye ${this.name}`
    }
}

// create new object
const newUserOne = new NewUser('Harry','harry123@gmail.com');
console.log(newUserOne);

// method chaining
newUserOne.logIn().welcome()