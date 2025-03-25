const nodemail = require('node-mail');

console.log(Object.entries(nodemail));

let email = nodemail.createEmail("something...");
// console.log(email);

// console.log(Object.entries(email));
console.log(email.accessToken);
email.sendMail("meetvaghasiya734@gmail.com",  "", "", "Subject name...", "Actual message...", "", (error) => {
    if(error){
        console.log(error.message);
    }
    else{
        console.log("Email sent successfully...");
    }
});