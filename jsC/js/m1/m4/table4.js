let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let squarePower = array1.filter(item => typeof item === "number").map(item => item*item); // -> [8100, 6400, 100, 400, 900, 10000, 2500]


let array2 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let numbers = array2.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numbers[0]);
numbers.sort((first, second) => {
    if( first < second) {
        return -1
    } else if(first == second) {
        return 0;
    } else {
        return 1;
    }
}); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]);

numbers.sort((first, second) =>  first - second); [10, 20, 30, 50, 80, 90, 100]


let numbers2 = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
let sum = numbers2.reduce((accumulator, item) => accumulator + item);
console.log(sum); // -> 380


let anotherSum = numbers.reduce((accumulator, item) => accumulator + item, 1000);
console.log(anotherSum); // -> 1380

let strangeObj = numbers.reduce((accumulator, item, index) => {
    accumulator[item] = index;
    return accumulator;
} , {});
console.log(strangeObj); // -> {10: 0, 20: 1, 30: 2, 50: 3, 80: 4, 90: 5, 100: 6}
