Console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // -> 5e-324
console.log(Number.MAX_SAFE_INTEGER); // -> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -> -9007199254740991


let numbers = [2e100, 200000, 1.5, Infinity];
for(let i=0; index< numbers.length; index++) {
    console.log(`is ${numbers[i]} Integer: ${Number.isInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} safe Integer: ${Number.isSafeInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} finite number: ${Number.isFinite(numbers[i])}`);
}

console.log(Number.parseFloat("123.12.12")); // -> 123.12
console.log(Number("123.12.12")); // -> NaN
console.log(Number.parseInt("1204px")); // -> 1204
console.log(Number("1204px")); // -> NaN


let delay = 10;
let name = "Bob";
let order = 'pizza';
let info = `Hi ${name}, you have to wait about ${delay} minutes for your ${order}`;
console.log(info); // -> Hi Bob, you have to wait about 10 minutes for your pizza
console.log(typeof name); // -> string
console.log(typeof order); // -> string
console.log(typeof info); // -> string


let anotherInfo = "Hi " + name + ", you have to wait about " + delay + " minutes for your " + order;

let warn2 = "Confirm ticket reservation for \"Alien 10\" movie.";
let warn1 = 'Confirm ticket reservation for "Alien 10" movie.';
let warn2 = "Confirm ticket reservation for 'Alien 10' movie.";
let warn3 = `warning: "Confirm ticket reservation for 'Alien 10' movie."`;
