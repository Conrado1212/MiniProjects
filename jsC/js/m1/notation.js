contact.tel === contact["tel"];
contact.email.work === contact["email"]["work"]


let contact = {
    "first name": "Ronald"
};
contact["first name"] = "Tim";
contact.first name = "Tim";    // SyntaxError: Unexpected identifier
contact."first name" = "Tim";    // SyntaxError: Unexpected string


let contact = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};
for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(key);
    console.log(contact[key]);
}



for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(`${key}: ${contact[key]}`);
}
