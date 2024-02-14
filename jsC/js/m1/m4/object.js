let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};


console.log(anotherPetsObj.snakes); // -> 1
anotherPetsObj.snakes = 2;
console.log(anotherPetsObj.snakes); // -> 2
delete anotherPetsObj.snakes;
console.log(anotherPetsObj.snakes); // -> undefined
anotherPetsObj.snakes = 0;
console.log(anotherPetsObj.snakes); // 0



let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};
Object.keys(anotherPetsObj).forEach(key=>console.log(key)); // -> snakes -> cats -> dogs
Object.values(anotherPetsObj).forEach(key=>console.log(key)); // -> 1 -> 3 -> 2
Object.entries(anotherPetsObj).forEach(key=>console.log(key)); // -> ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]


let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};
for (let key in anotherPetsObj) {
    console.log(key); // -> snakes -> cats -> dogs
    console.log(anotherPetsObj[key]); // -> 1 -> 3 -> 2
}


let petsObj = {"cats": 1, "dogs": 3, "hamsters": 2};
let newPetsObj = {...petsObj, "sharks": 1}; // -> {cats: 1, dogs: 3, hamsters: 2, sharks: 1}
