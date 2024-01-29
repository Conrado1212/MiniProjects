let name = "Bob";
console.log(name.length); // -> 3
console.log("Alice".length ); // -> 5
console.log("".length ); // -> 0


let strings = [undefined, "", "ab", "cd ef", 4, null];
for(let i=0; i< strings.length; i++) {
    strings[i] && strings[i].length && console.log(strings[i]);
}


let title = "Alien 10";
console.log(title[0]); // -> A
console.log(title.charAt(0)); // -> A



let ipAddressStr = "127.0.0.1"
let ipParts = ipAddressStr.split("."); // -> ["127", "0", "0", "1"]
console.log(ipParts[0]); // -> 127


let ipAddressStr2 = "127.0.0.1"
let ipParts2 = ipAddressStr2.split("."); // -> ["127", "0", "0", "1"]
console.log(ipParts2[0]); // -> 127
