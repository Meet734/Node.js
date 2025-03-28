const express = require('express');
const router = express.Router();

const publicController = require('../controllers/publicController');

// router.route('/').get(publicController.getFile);
console.log("Public route");

router.get('/:fileName', publicController.getFile);

console.log("After")

module.exports = router;