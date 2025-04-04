const {query, body, param,validationResult} = require('express-validator');
const AppError = require('./appError');

const addItemValidator = [
    body('sName').notEmpty().withMessage("Item name field is empty").isString().withMessage("Item name field must be of type string").isAlphanumeric().withMessage("Item name field must be only Alphanumeric"),
    body('nQuantity').notEmpty().withMessage("Quantity field is empty").isInt().withMessage("Quantity field must be of type integer"),
    body('nPrice').notEmpty().withMessage("Price field is empty").isFloat().withMessage("Price field must be of type float")
]

const updateItemValidator = [
    body('sName').notEmpty().withMessage("Item name field is empty").isString().withMessage("Item name field must be of type string").isAlphanumeric().withMessage("Item name field must be only Alphanumeric"),
    body('nQuantity').notEmpty().withMessage("Quantity field is empty").isInt().withMessage("Quantity field must be of type integer"),
    body('nPrice').notEmpty().withMessage("Price field is empty").isFloat().withMessage("Price field must be of type float")
]


const itemIdValidator = [
    param('iId').isUUID().withMessage("Item ID is not valid")
]

//send all error messages
function validationResponse(req, res, next){
    const result = validationResult(req);
    console.log("Generating validating response");
    if(!result.isEmpty()){
        throw new AppError(400, result.array()[0].msg);
    }
    next();
}

module.exports = {
    addItemValidator,
    updateItemValidator,
    itemIdValidator,
    validationResponse
}