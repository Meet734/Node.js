const express = require('express');
const router = express.Router();

const {addItem} = require('../controllers/addItem');
const {updateItem} = require('../controllers/updateItem');
const {getItem} = require('../controllers/getItem');
const {getItems} = require('../controllers/getItems');
const {deleteItem} = require('../controllers/deleteItem');

console.log("Item route...");

router.route('/').get(getItems);
router.route('/:id').get(getItem);
router.route('/').post(addItem);
router.route('/:id').put(updateItem);
router.route('/:id').delete(deleteItem);

// router.get('/', getItems);

console.log("routing complete...");


module.exports = router;