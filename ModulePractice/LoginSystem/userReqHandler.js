const jwt = require('jsonwebtoken');
const SECRET_KEY = "TopSecret";

function adminHandler(req, res){
    const token = req.cookies.token;
    console.log(token);

    jwt.verify(token, SECRET_KEY, (error, decoded) => {
        if(error || decoded.sRole !== 'Admin'){
            return res.json("Admin access denied...");
        }
        console.log("Decoded token successfully...");

        res.json({decoded, "Message": "You have admin access..."});
    });
}

function clientHandler(req, res){
    const token = req.cookies.token;
    console.log(token);

    jwt.verify(token, SECRET_KEY, (error, decoded) => {
        if(error || decoded.sRole !== 'Client'){
            return res.json("Client access denied...");
        }
        console.log("Decoded token successfully...");

        res.json({decoded, "Message": "You have client access..."});
    });
}

function devHandler(req, res){
    const token = req.cookies.token;
    console.log(token);

    jwt.verify(token, SECRET_KEY, (error, decoded) => {
        if(error || decoded.sRole !== 'Developer'){
            return res.json("Developer access denied...");
        }
        console.log("Decoded token successfully...");

        res.json({decoded, "Message": "You have developer access..."});
    });
}

module.exports = {
    adminHandler,
    clientHandler,
    devHandler
};