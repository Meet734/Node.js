const path = require('path');
const fs = require('fs');
const AppError = require('../utils/appError');

exports.getFile = function(req, res) {
    let fileName = req.params.fileName;
    // const IP = req.headers['x-forwarded-for'];

    // console.log(req.connection.remoteAddress);
    // let ip = req.connection.remoteAddress.split(`:`).pop();
    // console.log({ip})
    // console.log(req.ip, req.ips);
    // console.log("Req header: ", req.headers);
    res.sendFile(path.join(__dirname, '..', 'public', fileName));
}
