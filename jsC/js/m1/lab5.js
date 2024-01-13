// Write a function, deepComp, that will compare two objects given as arguments (deep comparison). Compare only properties (ignore methods), and consider the possibility of nesting (any number of levels).
let deepComp = function(arg1, arg2) {
    let val = Object.keys(arg1).length === Object.keys(arg2).length;
    if(val) {
        for(property in arg1) {
            if(typeof(arg1[property]) === typeof(arg2[property])) { 
                val = typeof(arg1[property]) === 'object' ? deepComp(arg1[property], arg2[property]) : arg1[property] === arg2[property]
            } else {
                val =false;
            }
            if(!val) break;
        }
    }
    return val;
}
// Properties can also be objects and arrays. We are interested in the properties available during the usual enumeration.

// For testing, use the following piece of code:
let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false


//let user = [name: 'Bob', age: 30];


// var user = {name:'Bob'};
// console.log(user.name)



// let car = {
//     make: 'Dodge',
//     model:'Dakota'
//   }
//   car.model = 'Viper'; car.color = 'red';
//    // Insert line of code here.
//   console.log(`${car.make} ${car.model}, color: ${car.color}`);



//   let circle = {
//     centre: {
//        x: 10,
//        y: 20
//     },
//     radius: 100
// }

// console.log(circle.centre.x);



// let key = 'x'
// let point = {
//     x: 100,
//     y: 200
// }

// console.log(point[key]);


// let point2 = {
//     'geo position string': '67.88183984530318, 12.97985704867863'
// }

// let user2 = {
//     name: "Ian",
//     age: 44
// }


// for(key in user2) console.log(key);

// Object.keys(user2).forEach(key => console.log(user2[key]));



// let user3 = {
//     name: 'Alice'
// }
// let user4 = {
//     name: 'Alice'
// }


// user3 === user4



// let user5 = {
//     name: 'Ian',
//     age: 44
// }
// let user6 = user5;
// user6.age = 40;
// console.log(`${user6.name} ${user5.age}`);



// // let car1 = {
// //     make: 'Dodge',
// //     model: 'Viper'
// // }
// // let car2 = Object.assign({}, car1, {model:'RAM', transmission: 'automatic'}, {color: 'red'});
// // car1.color = 'green';
// // console.log(`${car2.make} ${car2.model} ${car2.transmission} ${car2.color}`);



// let car1 = {
//     make: 'Dodge',
//     model: 'Viper'
// }
// let car2 = { ...car1, model:'RAM', color: 'red'};
// car1.color = 'green';
// console.log(`${car2.make} ${car2.model} ${car2.color}`);



// let point5 = {
//     x: 100,
//     y: 100,
//     // Insert line of code here.
//     show: function() {console.log(`${x} ${y}`);}
// }

// // show: function(this) {console.log(`${this.x} ${this.y}`);}
// point5['show']()



// let point6 = {
//     x: 100,
//     y: 200,
//     // Insert line of code here.
    
// }
// point6.positionX = 0;
// console.log(point6.x)


// let point = {
//     x: 100,
//     y: 200,
//     // Insert line of code here.
    
// // positionX() {this.x = x;}

// // positionX: set() {this.x = x;}

// // set positionX(x) {this.x = x;}

// // positionX: this.x = x
// }
// point.positionX = 0;
// console.log(point.x)


// let car = {
//     make: 'Dodge',
//     model: 'Viper'
// }


// Object.seal(car);
// // Insert line of code here.
// delete car.model;
// car.make = 'Toyota';
// car.color = 'red';
// console.log(`${car.make} ${car.model} ${car.color}`);



// let getCar = function(make, model) {
//     // Insert line of code here.
//     this.make = make; this.model = model;
// }
// let car = getCar('Dodge', 'Viper');
// console.log(`${car.make} ${car.model}`);


let Point = function(x, y) {
    this.x = x;
    this.y = y;
}
let point = new Point(0, 0);
let ColorPoint = function(color) {
    this.color = color;
}
 // Insert line of code here.


let cpoint = new ColorPoint('red');
console.log(cpoint.x);