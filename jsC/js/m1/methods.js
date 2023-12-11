let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType: function() {
        return "circle";
    }
};


let circle5 = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return "circle";
    }
};


console.log(circle.getType());


console.log(circle["getType"]() );


let circle4 = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return (typeof circle.radius === "number") ? 
        "circle" : "unknown" ;
    }
};
console.log(circle.getType());



let figure = {...circle};
delete circle.radius;
console.log(figure.radius);
console.log(figure.getType()); // "unknown"!



let circle3 = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return typeof this.radius === "number" ? "circle" : "unknown" ;
    }
};
console.log(circle.getType());
let figure2 = {...circle};
delete circle.radius;
console.log(figure.radius);
console.log(figure.getType()); // "circle"


let add = function (a,b) {
    return a + b;
}


let add2 = (a,b) => a + b;


let circle2 = {
    radius: 100,
    center: {
        x:0,
        y:0,
        show(){console.log(`${this.x}, ${this.y}`)}
    }
}
circle2.center.show();



let test = {
    point: circle.center
}



let contact = {
    _tel: "207-662-5412",
    get tel() {return this._tel;},
    set tel(t) { this._tel = t;}
};
console.log(contact.tel);
contact.tel = "100-100-1000";
console.log(contact.tel);





let contact2 = {
    _age: 36,
   firstName : "David",
    lastName : "Taylor",
    get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
    set age(a) { if( a > 0) this._age = a;}
};
console.log(contact.fullName);
contact.age = -20;
console.log(contact.age);



let car = {make: 'Jeep', model: 'Cherokee'};

console.log(car.make);
