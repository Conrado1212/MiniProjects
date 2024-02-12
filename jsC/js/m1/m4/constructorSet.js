let emptySet = new Set(); // -> {}
console.log(emptySet.size); // -> 0
let petsSet = new Set(["cat", "dog", "cat"]); // -> {"cat", "dog"}
console.log(petsSet.size); // -> 2

let petsSet2 = new Set(["cat", "dog"]); // -> {"cat", "dog"}
console.log(petsSet2.has("cat")); // -> true
console.log(petsSet2.has("shark")); // -> false

//manipulate

console.log(petsSet.size); // -> 2
petsSet.add("shark");
petsSet.add("hamster");
console.log(petsSet.size); // -> 4
console.log(petsSet.has("shark")); // -> true
petsSet.delete("dog"); // -> true
petsSet.delete("dog"); // -> false
console.log(petsSet.size); // -> 3
petsSet.clear();
console.log(petsSet.size); // -> 0



let petsSet3 = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
petsSet3.forEach(value => console.log(value)); // -> cat -> dog -> hamster


petsSet3.forEach((value, key) => console.log(`(${value}:${key})`)); // -> (cat:cat) -> (dog:dog) -> (hamster:hamster)


let petsSet4 = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
let petsIterator = petsSet4.values();
console.log(petsIterator.next().value); // -> cat
console.log(petsIterator.next().value); // -> dog
console.log(petsIterator.next().value); // -> hamster


let petsIterator2 = petsSet4.values();
let result = petsIterator2.next();
while (!result.done) {
    console.log(result.value); // -> cat -> dog -> hamster
 result = petsIterator2.next();
}



let petsSet5 = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
console.log(petsSet5 instanceof Set); // -> true
let petsArray = [...petsSet5]; // -> ["cat", "dog", "hamster"]
console.log(petsArray instanceof Array); // -> true
