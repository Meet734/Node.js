const express = require('express');
const crypto = require('crypto');
const app = express();

const session = require('express-session');

app.set('trust proxy', 1);

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    sameSite: 'strict',
    cookie: { secure: true }
}));

console.log(crypto.createHmac());

app.get('/hello', (req, res) => {
    req.session.user = {id: "SomeID"};
    // res.cookie = {"token": "Some token value"}
    req.session.cookie = {"token": "Some value"};
    console.log(req.session);
    console.log(req.sessionID);
    console.log("Setting cookie...");
    res.send("Success");
})
app.listen(3000, () => {
    console.log("Server is listening at port 3000...");
})