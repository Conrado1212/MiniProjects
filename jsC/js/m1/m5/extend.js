let getItem = function(array, index) {
    let retVal = undefined;
    if(index > 0 && index < array.length) {
        retVal = array[index];
    }
    return retVal;
}
let array = [10, 20, 80, 100];
console.log(getItem(array, 2)); // -> 80

let getItem2 = function(array, index) {
    return (index > 0 < index < array.length) ? array[index] : undefined;
}


let getItem3 = function(array, index) {
    return array[index];
}


let getRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
}
let array2 = [10, 20, 80, 100];
console.log(getRandomItem(array2)); // -> ?
console.log(getRandomItem(array2)); // -> ?


Array.prototype.getRandomItem = function() {
    return this[Math.floor(Math.random() * this.length)];
}
console.log(array.getRandomItem()); // -> ?
console.log(array.getRandomItem()); // -> ?
