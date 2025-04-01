const express = require('express');
const router = express.Router();

const {addItem} = require('../controllers/addItem');
const {updateItem} = require('../controllers/updateItem');
const {getItem} = require('../controllers/getItem');
const {getItems} = require('../controllers/getItems');
const {deleteItem} = require('../controllers/deleteItem');
const {addItemValidator, updateItemValidator, itemIdValidator, validationResponse} = require('../utils/globalValidator');

console.log("Item route...");

router.route('/').get(getItems);
router.route('/:iId').get(itemIdValidator, validationResponse, getItem);
router.route('/').post(addItemValidator, validationResponse, addItem);
router.route('/:iId').put(updateItemValidator, validationResponse, updateItem);
router.route('/:iId').delete(itemIdValidator, validationResponse, deleteItem);

// router.get('/', getItems);

console.log("routing complete...");


module.exports = router;
