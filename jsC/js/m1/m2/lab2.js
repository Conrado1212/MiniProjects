//Create a new class, ExtendedUser, that will inherit from the User class.
class ExtendedUser extends User{

    constructor({name, surname, email, role}) {
        super({name, surname, email, role});
    }
//Put a setter and getter named fullName in it. 

//The setter takes the concatenated first and last name *e.g. 'Rafael Fifer') and splits it into first and last name (the split method), changing the appropriate properties of the object.
setfullName({fullName}) {
   let names = fullName.split(' ');
   if(names[0] && names[1]){
    this.firstName = names[0];
    this.LastName = names[1];
   }
    
};
//The getter should return the first name and last name concatenated into one string. 
getfullName() {
    
        return `${this.firstName} ${this.LastName}`

    
};
}

//Based on the ExtendedUser class, create two more classes, Teacher and Student (inheritance).
// They should not have any new methods or properties, 
//but only the default roles in their constructors to 'teacher' or 'student' respectively (i.e. their constructors will take three parameters instead of four: name, surname, and email);

class Teacher extends ExtendedUser{
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'Teacher'});
    }
}

class Student extends ExtendedUser{
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'Student'});
    }
}





//Test your solution using the following code:
let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4);
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses
student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses