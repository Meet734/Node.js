const jwt = require('jsonwebtoken');

const secretKey = "TopSecret";

const token = jwt.sign({
    "id": 1,
    "userName": "Someone"
}, secretKey, {expiresIn: "1m"});

console.log(token);

// setTimeout(() => {
//     console.log(token);
// }, 2000);


setTimeout(() => {
    jwt.verify(token, secretKey, (error, decoded) => {
        if(error){
            console.log("The JWT is invalid...");
        }
        else{
            console.log("the JWT is valid...", {decoded});
        }
    });
}, 3000);
