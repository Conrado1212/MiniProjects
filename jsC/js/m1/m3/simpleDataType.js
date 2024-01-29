let strObj = new String("Do bats eat cats?");
console.log(typeof(strObj)); //-> object
console.log(strObj.length); // -> 17
let words = strObj.split(" ");
console.log(words[0]); // -> Do


let str = "Do bats eat cats?";
console.log(typeof(str)); //-> string
console.log(str.length); // -> 17
let words2 = str.split(" ");
console.log(words2[0]); // -> Do


let boolObj1 = new Boolean;
let boolObj2 = new Boolean(true);
let str1 = boolObj1.toString();
let bool2 = boolObj2.valueOf();
console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${ bool2}`); // -> bool2 : boolean : true


let bool1 = false;
let str2 = bool1.toString();
let bool3 = bool1.valueOf();
console.log(`str1 : ${typeof str2} : ${str2}`); // -> str2 : string : false
console.log(`bool2 : ${typeof bool3} : ${ bool3}`); // -> bool3 : boolean : false

let a = 10; // decimal - default
let b = 0x10;   // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2
let x = 0.3;
let y = 0.6;
console.log(x + y); // -> 0.8999999999999999
console.log((x + y).toFixed(1));    // -> 0.9
console.log(x / 0);      // -> Infinity
console.log(x / "abc");  // -> NaN

let nrStr1 = (11).toString();
let nrStr2 = (11).toString(16);
console.log(`nrStr1 : ${typeof nrStr1} : ${nrStr1}`); // -> nrStr1 : string : 11
console.log(`nrStr2 : ${typeof nrStr2} : ${nrStr2}`); // -> nrStr1 : string : b

let numberObj1 = new Number;            // -> 0
let numberObj2 = new Number(100);       // -> 100
let numberObj3 = new Number("200");     // -> 200
let numberObj4 = new Number("abcd");    // -> NaN
let numberObj5 = new Number(9e10000);   // -> Infinity
console.log(`numberObj1 : ${typeof numberObj1} : ${ numberObj1.valueOf()}`); // -> numberObj1 : object : 0


let nr = Number("100");
console.log(`nr : ${typeof nr} : ${ nr}`); // -> nr : number : 100


let nr2 = Number("200")
console.log(`ne2 : ${typeof nr2} : ${ nr2}`); // -> nr2 : number : 200


let nr3 = Number("abcd")
console.log(`ne3 : ${typeof nr3} : ${ nr3}`); // -> nr3 : number : abcd

let nr4 = Number("9e10000")
console.log(`nr4 : ${typeof nr5} : ${ nr3}`); // -> nr4 : number : 9e10000