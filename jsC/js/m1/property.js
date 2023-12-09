if(contact.notes) { // if different then undefined
    console.log(contact.notes);
}


if(!contact.notes) { // if undefined (check !)
    contact.notes = "something really important";
}


console.log(contact.notes); // -> undefined



console.log(contact.email.private); // exception!



if(contact && contact.email) {
    console.log(contact.email.private);
}



contact && contact.email && console.log(contact.email.private);



if("notes" in contact) { // if true
    console.log(contact.notes);
}



let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
for(x in contact) {
    // print property name
    console.log(x);
}


for(x in contact) {
    // print property value 
    console.log(contact[x]);
}



for(x in contact) {
    // print property name, type and value
    console.log(`${x} : ${typeof contact[x]} : ${contact[x]}`);
}



let keys = Object.keys(contact);
