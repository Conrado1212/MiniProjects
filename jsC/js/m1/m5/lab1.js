
// Write a function that will draw m integers from 0 to n. Pass parameters m and n and two flags to the function:

// the first determines whether the drawn numbers may be repeated;
// the second one states if the returned array of numbers should be sorted.



function getRandomSet(m,n,u,s){
    let retVal = u ? new Set() : [];
    let push = (e) => u ? retVal.add(e) : retVal.push(e);
    let length = () => u ?retVal.size : retVal.length

    for(;length()<m;){
        push(Math.floor(Math.random()* Math.floor(n)))
    }
    return s ? [...retVal].sort((n1,n2) => n1-n2) : [...retVal]
}

console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));
