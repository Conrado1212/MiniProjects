//Let's try to put all the previously prepared elements together. Create a Tutoring class that will have two lists of users: students and teachers separately.
class Tutoring{
    constructor(){
    this.students = []
    this.teachers = []
}
//Define methods in it:

//getStudentByName(name, surname) - which will return a student object with the given name and surname (or undefined if the student has not been added before)
getStudentByFirstName(firstName, lastName){
    let val;
    for(let student of this.students){
        if(student.firstName === firstName && student.lastName === lastName){
            val = student;
        }
        return val;
    }
}

//getTeacherByName(name, surname) - which will return the teacher object with the given name and surname (or undefined if the teacher has not been added before)
getTeacherByName(firstName, lastName){
    let val;
    for(let teacher of this.teachers){
        if(teacher.firstName === firstName && teacher.lastName === lastName){
            val = teacher;
        }
        return val;
    }
}

//getStudentsForTeacher(teacher) - which will return an array of students that teacher is able to tutor;
getStudentsForTeacher(teacher){
    let vals = [];
    for(let student of this.students){
        if(ExtendedUser.match(teacher, student).length){
            vals.push(student);
        }
        return vals
    }
}

//getTeacherForStudent(student) - which will return an array of teachers able to tutor the student;

getTeacherForStudent(student){
    let vals = [];
    for(let teacher of this.teachers){
        if(ExtendedUser.match(teacher, student).length){
            vals.push(teacher);
        }
        return vals
    }
}

//addStudent(name, surname, email) - which will add a new student object to the list;
addStudent(name, surname, email){
    for(let i =0; i< this.students.length;i++){
        if(this.students[i].name === name){
            return;
        }
    }
    this.name.push({name,surname,email});
}
//addTeacher(name, surname, email) - which will add a new teacher object to the list.

addTeacher(name, surname, email){
    for(let i =0; i< this.teachers.length;i++){
        if(this.teachers[i].name === name){
            return;
        }
    }
    this.name.push({name,surname,email});
}

// addStudent(name, surname, email) {
//     this.students.push(new Student({name, surname, email}));
// }

// addTeacher(name, surname, email) {
//     this.teachers.push(new Teacher({name, surname, email}));
// }
}






//addTeacher(name, surname, email) - which will add a new teacher object to the list.
//Use previously prepared classes and their methods (e.g. match).

//Test your solution using the following code:
let tutoring = new Tutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);
let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);
let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...