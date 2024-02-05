let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.";
let words = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
console.log(words.length); // -> 30

let a = text.toLowerCase();
let b = a.replaceAll('.','');
let c = b.replaceAll(',','');
let word = c.split(' ');


let text2 = "One, two, three, one, two, three.";
console.log(text2.includes("two")); // -> true
console.log(text2.includes("four")); // -> false
console.log(text2.indexOf("two")); // -> 5
console.log(text2.indexOf("four")); // -> -1
console.log(text2.lastIndexOf("two")); // -> 22


let text3 = "One, two, three, one, two, three.";
console.log(text3.substr(0,8)); // -> One, two
console.log(text3.substr(10)); // -> three, one, two, three.
console.log(text3.substr(-6)); // -> three.
console.log(text3.substr(-6, 2)); // -> th

console.log(text3.substring(5, 8)); // -> two
console.log(text3.substring(5)); // -> two, three, one, two, three.
console.log(text3.substring(-11, 8)); // -> One, two


console.log(text3.slice(0,3)); // -> One
console.log(text3.slice(5)); // -> two, three, one, two, three.
console.log(text3.slice(-11)); // -> two, three.
console.log(text3.slice(-11, -8)); // -> two

let numbers = [100, 5, 66];
for(let i=0; i< numbers.length; i++) {
    console.log(String(numbers[i]).padStart(10, '0'));
    console.log(String(numbers[i]).padStart(10, 'abc'));
    console.log(String(numbers[i]).padStart(10));
}


let city = " Bergen  ";
let street = " Dokkeboder";
console.log(city.trimLeft().length); // -> 8 -> "Bergen  "
console.log(city.trimRight().length); // -> 7 -> " Bergen"
console.log(city.trim().length); // -> 6 -> "Berge"
console.log(street.trim().length); // -> 10 -> "Dokkeboder"
