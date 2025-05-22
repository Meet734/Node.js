const express = require('express');
const router = express.Router();

const {serveData} = require('../controllers/dataController');

router.get('/', serveData);

module.exports = router;