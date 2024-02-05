let array1 = [10, 20, 30];
let array2 = ["cat", "dog"];
let array3 = array1.concat(array2); // -> [10, 20, 30, "cat", "dog"];
console.log(array1.length); // -> 3
console.log(array2.length); // -> 2
console.log(array3.length); // -> 5
console.log(array3[0]); // -> 10
console.log(array3[3]); // -> "cat"

let array4 = [10, 20, 30]; // -> [10, 20, 30]
array4.push(100); // -> [10, 20, 30, 100]
array4.push(50, "dog"); // -> [10, 20, 30, 100, 50, "dog"]
array4.unshift("cat", 90, 80); // -> ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"]

console.log(array1.length); // -> 9
console.log(array1.shift()); // -> cat
console.log(array1.length); // -> 8
console.log(array1.pop()); // -> dog
console.log(array1.length); // -> 7

let array5 = [10, 20, 30]; // -> [10, 20, 30]
array5[3] = 100; // -> [10, 20, 30, 100]
array5[5] = 1000; // -> [10, 20, 30, 100, undefined, 1000]
delete array5[1]; // -> [10, undefined, 30, 100, undefined, 1000]
console.log(array5[1]); // -> undefined

let array6 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
for(let index=0; index< array6.length; index++) {
    console.log(`${index} : ${array6[index]}`); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
}


function toConsole(item, index, array) {
    console.log(`${index} : ${item}`);
}
array1.forEach(toConsole); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog


array1.forEach(function (item, index) {
    console.log(`${index} : ${item}`);
});

array1.forEach( (item, index) => {
    console.log(`${index} : ${item}`);
});

array1.forEach( (item, index) => console.log(`${index} : ${item}`));
