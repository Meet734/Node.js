const router = require('express').Router();

const {transferAmount, creditAmount} = require('../controllers/transaction');

router.post('/transfer', transferAmount);
router.post('/credit', creditAmount);

module.exports = router;