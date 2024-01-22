//Create an ExtendedTutoring class, inheriting from Tutoring.
class ExtendedTutoring extends Tutoring{
    constructor(){
        super();
    }
    //Equip it with one new method: sendMessages(from, to, message).
    sendMessages(from, to = [], message){
        if(from && to.length){
            for(let target of to){
                target.sendMessage(from, message)
            }
        }
    }
}
 //The from argument is the user (student or teacher) who sends the message. The argument to is the list of recipients (user objects).

//Test your solution using the following code:
let tutoring = new ExtendedTutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let to = [];
to.push(tutoring.getStudentByName('Rafael', 'Fife'));
to.push(tutoring.getStudentByName('Kelly', 'Estes'));
tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');
for(let user of to) {
    user.showMessagesHistory();
}
// -> PaulaThompkins@jourrapide.com -> rfife@rhyta.com: test message
// -> PaulaThompkins@jourrapide.com -> k_estes@dayrep.com: test message