let date1 = new Date(2020, 6, 8, 10, 20, 0);
let date2 = new Date(2020, 6, 9, 10, 20, 0);
console.log(date2.getTime() - date1.getTime()); // -> 86400000 -> 1000 x 60 x 60 x 24


let startTime = Date.now();

for(i=0; i<10000000; i++){

}
let endTime = Date.now();
console.log(endTime - startTime);


let date = new Date("2020-07-08T10:20:00");
console.log(date.getMonth()); // -> 6 
console.log(date.getDay()); // -> 3
console.log(date.getDate()); // 8
console.log(date.getHours()); // -> 10
date.setHours(12);
console.log(date.getHours()); // -> 12


let date3 = new Date("2020-07-08T10:20:00");
console.log(date3.toLocaleDateString()); // -> 08/07/2020
console.log(date3.toLocaleTimeString()); // -> 10:20:00
