let emptyMap = new Map();
let petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(emptyMap.size); // -> 0
console.log(petsMap.size); // -> 3


let petsMap2 = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(petsMap2.has("dogs")); // -> true
console.log(petsMap2.has("sharks")); // -> false
console.log(petsMap2.has(1)); // -> false


let petsMap3 = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(petsMap3.get("hamsters")); // -> 5
petsMap.set("hamsters", 6);
console.log(petsMap3.get("hamsters")); // -> 6
petsMap.delete("hamsters");
console.log(petsMap3.get("hamsters")); // -> undefined
petsMap.clear();
console.log(petsMap3.size); // -> 0


let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
anotherPetsMap.forEach((value, key) => console.log(`${key} : ${value}`)); // -> snakes : 1 -> cats : 3 -> dogs : 2


let anotherPetsMap2 = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petValuesIterator = anotherPetsMap2.values();
console.log(petValuesIterator.next().value); // -> 1
console.log(petValuesIterator.next().value); // -> 3
console.log(petValuesIterator.next().value); // -> 2


let anotherPetsMap3 = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petKeysIterator2 = anotherPetsMap3.keys();
console.log(petKeysIterator2.next().value); // -> snakes
console.log(petKeysIterator2.next().value); // -> cats
console.log(petKeysIterator2.next().value); // -> dogs


let anotherPetsMap4 = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petValuesIterator3 = anotherPetsMap3.values();
console.log(petValuesIterator3.next().value); // -> 1
console.log(petValuesIterator3.next().value); // -> 3
console.log(petValuesIterator3.next().value); // -> 2


let petsIterator = anotherPetsMap.entries();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> ["snakes", 1] -> "cats", 3] -> ["dogs", 2]
 result = petsIterator.next();
}
