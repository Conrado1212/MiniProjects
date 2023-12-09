let nr = 10; 
let b = false; 
let str = "uno dos tres"; 
let arr = [10, 20, 30]; 
let obj = {
    x: 10, 
    y: 20
}; 
let fn = function(arg) {
    console.log(arg)
}; 
fn(123); //-> 123


let test = {
    nr: 10, 
    b: false, 
    str: "uno dos tres", 
    arr: [10, 20, 30], 
    obj: {
        x: 10, 
        y: 20
    }, 
fn: function(arg) {console.log(arg)} 
};
test.fn(123);


console.log(test.obj.x);
test.obj.y = 40;

let point = {
    x: 0,
    y: 0,
    moveHorizontally: function(distance) {
        this.x = this.x + distance;
    },
    moveVertically: function(distance) {
        this.y = this.y + distance;
    }
}
console.log(point.x);    // -> 0
point.moveHorizontally(30);
console.log(point.x);    // -> 30



let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};



contact.firstName = "Ronald";
contact.lastName = "Murphy";
console.log(contact.tel);   // -> 207-662-5412
console.log(contact.firstName);     // -> Ronald



console.log(contact.notes);



let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};


contact.email = ["RonaldSMurphy@freepost.org", "rsmurphy@briazz.com" ];


contact.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com" 
};
console.log(contact.email.work);


delete contact.email.work;
console.log(contact.email.work);
console.log(contact.email.private);
