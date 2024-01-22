//Modify the ExtendedUser class (rewrite it) by adding a static match method to it. 
//The method should retrieve the teacher object, student object, and optionally a course name. Its task is to find the match between the student and the teacher.
class ExtendedUser extends User{

    constructor({name, surname, email, role}) {
        super({name, surname, email, role});
    }



setfullName({fullName}) {
   let names = fullName.split(' ');
   if(names[0] && names[1]){
    this.firstName = names[0];
    this.LastName = names[1];
   }
    
};

getfullName() {
    
        return `${this.firstName} ${this.LastName}`

    
};
//Modify the ExtendedUser class (rewrite it) by adding a static match method to it. 
//The method should retrieve the teacher object, student object, and optionally a course name. Its task is to find the match between the student and the teacher.


static match(teacher, student, course) {
   let matched = [];
   for(let scourse of student.courses0){
    for(let tcourse of teacher.courses) {
        if(scourse.course === tcourse.course && scourse.level <= tcourse.level){
            matched.push(scourse);
        }
   }

}
if(course){
    for(let mcousre of matched){
        if(mcousre.course === course){
            return mcousre;
        }
    }
    return null;
}else
return matched;
}




}
//In case the course name is not provided, the method should return:

//an empty array if there is no match (the teacher does not teach courses the student is interested in, or teaches courses at a lower level)
//an array with {course, level} objects, if the teacher teaches the courses the student is interested in.
//If the course name is passed as the last argument, then the method should return the {course, level} object in case of a correct match, or undefined otherwise.

//Test your solution using the following code:
let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);
let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]
teacher1.editCourse('maths', 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []
teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match); // -> {course: 'physics', level: 4}