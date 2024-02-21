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
            this.#LastName = x;
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
    add(FirstName, LastName, email) { 
        try{
            this.#users.set(email,new User(FirstName,LastName,email));
        }catch(e){
            console.log(e.message);
        }
      
    
}
delete(email){
  return  this.#users.delete(email);
}
    get(email){
        return  this.#users.get(email);
    }
    getAll(sortBy) { //name,surname,email
        return [...this.#users].sort((u1,u2) => u1[1][sortBy] > u2[1][sortBy] ? 1 : -1).map(u => u[1]);
    }
}

let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));