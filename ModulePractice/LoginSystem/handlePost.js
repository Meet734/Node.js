const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { parseArgs } = require('util');

const SECRET_KEY = "TopSecret";

module.exports = function(req, res){
    const {sUsername, sPassword} = req.body;
    console.log(sUsername, sPassword);

    const aUsers = JSON.parse(fs.readFileSync('data.json'));
    console.log(aUsers);

    const idx = aUsers.findIndex((oUser) => {
        return (oUser.sUsername === sUsername && oUser.sPassword === sPassword);
    })

    if(idx == -1){
        return res.json({"Message": "Not Authenticated..."});
    }

    const token = jwt.sign(aUsers[idx], SECRET_KEY, {expiresIn: "1m"});
    res.cookie("token", token);
    res.json("Success");
}