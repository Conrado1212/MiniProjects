let numbers = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]); // -> 10
numbers.reverse(); // -> [100, 90, 80, 50, 30, 20, 10]
console.log(numbers[0]); // -> 100
numbers.reverse(); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]); // -> 10


let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPets.includes("shark")); // -> true 
console.log(myPets.includes("unicorn")); // -> false
console.log(myPets.indexOf("dog")); // -> 1
console.log(myPets.lastIndexOf("dog")); // -> 6
console.log(myPets.indexOf("unicorn")); // -> -1


let myPets2 = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPets2.find(item => item.length > 3)); // -> hamster
console.log(myPets2.find(item => item.includes("og"))); // -> dog
console.log(myPets2.find(item => item.includes("fish"))); // -> undefined
console.log(myPets2.findIndex(item => item.length > 3)); // -> 2
console.log(myPets2.findIndex(item => item.includes("og"))); // -> 1
console.log(myPets2.findIndex(item => item.includes("fish"))); // -> -1


//copy 
let myPets3 = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let p1 = myPets3.slice(3); // ->  ["canary", "shark", "cat", "dog"]
let p2 = myPets3.slice(3, 5); // -> ["canary", "shark"]
let p3 = myPets3.slice(-3); // -> ["shark", "cat", "dog"]
let p4 = myPets3.slice(-3, -1); // -> ["shark", "cat"]

//remove nad replace 

let myPets4 = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let removedPets = myPets4.splice(2, 3); 
console.log(myPets4); // -> ["cat", "dog", "cat", "dog"]
console.log(removedPets); // -> ["hamster", "canary", "shark"]


let myPets5 = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
myPets5.splice(2, 0, "rabbit", "guinea pig");
console.log(myPets5); // -> ["cat", "dog", "rabbit", "guinea pig", "hamster", "canary", "shark", "cat", "dog"]
