// Write a function, deepComp, that will compare two objects given as arguments (deep comparison). Compare only properties (ignore methods), and consider the possibility of nesting (any number of levels).
let deepComp = function(arg1, arg2) {
    let val = Object.keys(arg1).length === Object.keys(arg2).length;
    if(val) {
        for(property in arg1) {
            if(typeof(arg1[property]) === typeof(arg2[property])) { 
                val = typeof(arg1[property]) === 'object' ? deepComp(arg1[property], arg2[property]) : arg1[property] === arg2[property]
            } else {
                val =false;
            }
            if(!val) break;
        }
    }
    return val;
}
// Properties can also be objects and arrays. We are interested in the properties available during the usual enumeration.

// For testing, use the following piece of code:
let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false