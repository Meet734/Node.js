module.exports = function(error, req, res, next){
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';

    console.log("Error controller...");
    res.status(error.statusCode).json({
        "status": error.status,
        "error": error,
        "message": error.message
    });

    // console.log("_________________________");
    // console.log(error);
}