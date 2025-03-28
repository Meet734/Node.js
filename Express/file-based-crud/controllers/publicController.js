const path = require('path');
const fs = require('fs');
const AppError = require('../utils/appError');

exports.getFile = function(req, res) {
    let fileName = req.params.fileName;

    res.sendFile(path.join(__dirname, '..', 'public', fileName));
}