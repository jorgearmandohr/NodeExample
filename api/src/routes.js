var express = require("express");

var router = express.Router();

var ratesController = require('./controllers/Rates');
var transactionsController = require('./controllers/Transactions');

router.get('/rates', ratesController.getRates);
router.get('/transactions', transactionsController.getTransactions);
router.route('/transactions/:sku').get(transactionsController.getSkuTransaction);

module.exports = router;
