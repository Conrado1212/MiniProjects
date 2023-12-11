print("Hello world!")


let point = {x:0, y:0};
let coloredPoint = {color: "red"};


coloredPoint.__proto__ = point;


console.log(Object.getOwnPropertyNames(coloredPoint));
console.log(coloredPoint.color);
console.log(coloredPoint.x);



coloredPoint.x = 100;   // new property
console.log(coloredPoint.x);
console.log(point.x);
console.log(Object.getOwnPropertyNames(coloredPoint));




point.y = 200;
console.log(coloredPoint.y);
console.log(point.y);


figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};
let circle = {
    type: "circle",
    center: {x:0, y:0},
    radius: 100
};
circle.__proto__ = figure;



console.log(figure.getType());
console.log(circle.getType());




Object.setPrototypeOf(circle, figure);
let proto = Object.getPrototypeOf(circle);
console.log(circle.getType());



let circle = Object.create(figure)
circle.type = "circle";
circle.center = {x:0, y:0},
circle.radius = 100;
console.log(circle.getType());




let Figure = function(){
    this.getType = function() {
        return this.type ? this.type : "unknown";
    }
};
let figure = new Figure;




let Circle = function(center, radius){
    this.type = "circle";
    this.center = center;
    this.radius = radius;
};
Circle.prototype = figure;
let circle1 = new Circle({x:0, y:0}, 10);
let circle2 = new Circle({x:100, y:100}, 100);




let Triangle = function(v1, v2, v3) {
    this.type = "triangle";
    this.vertices = [ v1, v2, v3];
};
Triangle.prototype = figure;
let triangle1 = new Triangle({x:0, y:0}, {x:50, y:50}, {x:10, y:100});
console.log(circle1.getType());
console.log(triangle1.getType());



Circle.prototype.hi = function(){console.log("Hi!")};


circle1.hi();
triangle1.hi();
figure.hi();


let testString = new String("unu doi trei");
console.log(testString.length);


String.prototype.hi = function(){console.log("Hi!")};
console(string.hi());



console.log("abcd".hi());
