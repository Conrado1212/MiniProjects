let createPoint  = function(x, y) {
    let obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
};
let point1 = createPoint(1,1);
let point2 = createPoint(2,2);
console.log(point1.x); // ->  1
console.log(point2.x); // -> 2


let createPoint2  = function(x, y) {
    return {
        x:x,
        y:y
    }
};



let createPoint3  = function(x, y) {
    return {
        x,
        y
    }
};


let createPoint4  = (x, y) => ({x, y});



let createColoredPoint  = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    return {
        x,
        y,
        getColor() {return _color}
    }
};
let coloredPoint1 = createColoredPoint (1, 1, "red");// -> ... object under construction
let coloredPoint2 = createColoredPoint (2, 2, "green");// -> ... object under construction 
console.log(coloredPoint1.getColor());    // -> red
console.log(coloredPoint2.getColor());    // -> green
console.log(coloredPoint1._color);   // -> undefined !!!


let ColoredPoint = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    
    this.x = x;
    this.y = y;
    this.getColor = function() {return _color};
};
let coloredPoint3 = new ColoredPoint(1, 1, "red");
let coloredPoint4 = new ColoredPoint(2, 2, "green"); 
console.log(coloredPoint3.getColor());    // -> red
console.log(coloredPoint4.getColor());    // -> green
console.log(coloredPoint3._color);   // -> undefined !!!

console.log(coloredPoint3.constructor.name);


console.log(typeof coloredPoint3.constructor);



let a = {};
console.log(typeof a.constructor);

let emptyObject = new Object();
console.log(emptyObject.constructor.name); 


let anotherEmptyObject = {};
console.log(anotherEmptyObject.constructor.name);


let reallyEmptyObject = Object.create(null);
console.log(typeof reallyEmptyObject.constructor);
