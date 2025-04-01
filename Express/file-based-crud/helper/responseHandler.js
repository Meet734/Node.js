const STATUS_CODES = require('http').STATUS_CODES;
const status = require('http-status');

module.exports = function responseHandler(res, statusCode, message, data=null){
    statusCode = ""+statusCode;
    if(!data){
        res.status(statusCode).json({"Status":STATUS_CODES[statusCode], "Message": message});
    }
    else{
        res.status(statusCode).json({"Status":STATUS_CODES[statusCode], "Message": message, "data": data});
    }
}