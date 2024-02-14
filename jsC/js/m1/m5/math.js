console.log(Math.PI); // -> 3.141592653589793
console.log(Math.E); // -> 2.718281828459045

console.log(Math.ceil(10.2)); // -> 11
console.log(Math.floor(10.2)); // -> 10
console.log(Math.round(10.2)); // -> 10
console.log(Math.ceil(10.499999)); // -> 11 
console.log(Math.floor(10.499999)); // -> 10
console.log(Math.round(10.499999)); // -> 10
console.log(Math.ceil(10.5)); // -> 11
console.log(Math.floor(10.5)); // -> 10
console.log(Math.round(10.5)); // -> 11
console.log(Math.ceil(10.8)); // -> 11
console.log(Math.floor(10.8)); // -> 10
console.log(Math.round(10.8)); // -> 11


console.log(Math.random()); // -> ?


let randomInteger = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min) + _min);
}
console.log(randomInteger(10,20)); // -> ?



let randomInteger2 = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
}
console.log(randomInteger2(10,20)); // -> ?



console.log(Math.abs(-3.25)); // -> 3.25
console.log(Math.abs(10)); // -> 10


console.log(Math.min(100, 20, 300, 10, 400));
let numbers = [100, 20, 300, 10, 400];
console.log(Math.max(...numbers));


Console.log(Math.pow(2, 3)); // -> 8 => 23
console.log(Math.pow(4, 2)); // -> 16 => 42
console.log(Math.pow(4, -1)); // -> 0.25 => 4-1 = 1/4^1 
console.log(Math.pow(4, -2)); // -> 0.0625 => 4-2 = 1/4^2 
console.log(Math.pow(4, 0.5)); // -> 2 => 40.5 = 4^(1/2) = √(2&4)
console.log(Math.pow(-1,0.5)); // -> NaN => -10.5 = √(2&-1)
console.log(Math.sqrt(4)); // -> 2
x = Math.pow(Math.E, 2); // -> 7.3890560989306495
console.log(Math.log(x)); // -> 2
console.log(Math.log2(16)); // -> 4
console.log(Math.log10(1000)); // -> 3


console.log(Math.cos(Math.PI/3));
console.log(Math.tan(Math.PI/4));
console.log(Math.asin(1));
