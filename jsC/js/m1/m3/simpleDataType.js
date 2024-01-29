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
