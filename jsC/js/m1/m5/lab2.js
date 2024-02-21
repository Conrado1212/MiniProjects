// Declare a User class that will allow you to create objects with user information (first name, last name, email).
// The data should be passed to the constructor and stored as private properties.
let nameRegExp = /^[A-Z][a-z]+$/;
let emailRegExp = /^([a-zA-Z]+\.)*[a-zA-Z]+@([a-zA-Z]+\.)+[a-zA-Z]{2,3}$/;
class User {
    #FirstName;
    #LastName;
    #email
    constructor({FirstName, LastName, email}){
        this.#FirstName = FirstName;
        this.#LastName = LastName;
        this.#email = email;
    };
    // Create setters and getters to handle them. 
    //Use regular expressions to check if the data passed to the constructor or setter is in the correct format 
    //(first and last name consist of letters only, first letter upper-case, proper email address format). 
    //For simplicity, assume that an email address can only consist of letters, while strings of letters can be separated by dots.
    get FirstName() {
        return this.#FirstName;
    }

    set FirstName(x){
        if (typeof x === 'string' && x.match(nameRegExp)) {
            this.#FirstName = x;
        } else {
            throw(new Error(`Incorrect FirstName format: ${x}`));
        }
    }

    get LastName() {
        return this.#LastName;
    }

    set LastName(x) {
        if (typeof x === 'string' && x.match(nameRegExp)) {
            this.#surname = x;
        } else {
            throw(new Error(`Incorrect surname format: ${x}`));
        }
    }
    get email() {
        return this.#email;
    }
    set email(x) {
        if (typeof x === 'string' && x.match(emailRegExp)) {
            this.#email = x;
        } else {
            throw(new Error(`Incorrect email format: ${x}`));
        }
    }
}



try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1);
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
    
} catch(err) {
    console.log(err.message);
}

   
  
   
  
  


// For example, abc.def@ghi.jk or a@abc.def.gh will be valid, while a_b@abc.def or abcd1@efg.hi.jk will be invalid.

// If data is incompatible with the format, do not save it and throw an exception (Error class) with an appropriate message.