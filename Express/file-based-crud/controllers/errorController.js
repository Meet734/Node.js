const responseHandler = require('../helper/responseHandler');

module.exports = function(error, req, res, next){
    error.statusCode = error.statusCode || 500;
    // error.status = error.status || 'error';

    console.log("Error controller...");
    responseHandler(res, error.statusCode, error.message);

    // console.log("_________________________");
    // console.log(error);
}
