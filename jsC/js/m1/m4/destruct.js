let myPets = ["cat", "dog", "hamster", "canary"];
let pet1 = myPets[0];
let pet3 = myPets[2];
let pet4 = myPets[3];
console.log(pet1); // -> cat
console.log(pet3); // -> hamster

//let [pet1, , pet3, pet4] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> hamster

let myPets2 = ["cat", "dog"];
let [pet5, , pet6] = myPets2;
console.log(pet5); // -> cat
console.log(pet6); // -> undefined


let myPets3 = ["cat", "dog"];
let [pet7 = "fish", , pet8 = "fish"] = myPets3;
console.log(pet7); // -> cat
console.log(pet8); // -> fish


let array1 = [100, 200, 300];
let array2 = [1000, 2000];
let array3 = [10, 20, ...array1, 500, ...array2]; //-> [10, 20, 100, 200, 300, 500, 1000, 2000]

let testFn = (a, b, c, d) => a + b + c + d;
let array = [10, 20, 30, 40];
console.lof(testFn(...array)); // -> 100
