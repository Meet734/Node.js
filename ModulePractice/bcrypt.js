const bcrypt = require('bcrypt');

const password = 'gfgDemoPassword';
const wrongPassword = 'gfgDemoPasswor';
const saltRounds = 10;

// bcrypt.hash(password, saltRounds, function (err, hash) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(hash);
// });

const hashed = "$2b$10$vowZIHiztmFRt7QrLsZaIOpm4lYjiLIsOEjFb5jH6y57nHUS5PuAi";

bcrypt.compare(password, hashed, function (err, result) {
    if (err) {
        console.error(err);
        return;
    }
    if (result) {
        console.log("Password is correct!");
    } else {
        console.log("Password is incorrect!");
    }
});

// let salt;
bcrypt.genSalt(saltRounds)
    .then((data) => {
        console.log(data);
        return data;
    });
// console.log(salt);

