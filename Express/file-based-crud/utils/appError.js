class AppError extends Error{
    constructor(nStatusCode, sStatus, sMessage){
        super(sMessage);
        this.statusCode = nStatusCode;
        this.status = sStatus;
        this.message = sMessage;
        console.log("AppError");
    }
}

module.exports = AppError;