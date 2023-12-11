let contact = {
    _age: 36,
    firstName : "David",
    lastName : "Taylor",
    get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
    set age(a) { if( a > 0) this._age = a;}
};
let keys = Object.keys(contact);
console.log(keys);


let desc = Object.getOwnPropertyDescriptor(contact, "firstName");
console.log(desc);


{
    value: "David", 
    writable; true, 
    enumerable; true, 
    configurable; true
}


let contact2 = {};
Object.defineProperty(contact2, "_age", {
    value: 36,
    writable: true,
    enumerable: false,
    configurable: true
});
Object.keys(contact2);
console.log(contact2._age);



Object.defineProperty(contact2, "_age", {
    value: contact2._age,
    writable: false,
    enumerable: false,
    configurable: true
});
contact2._age = 100;
console.log(contact2._age);



let enumKeys = Object.keys(contact);
let allKeys = Object.getOwnPropertyNames(contact);
console.log(enumKeys);
console.log(allKeys);
