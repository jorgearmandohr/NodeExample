'use strict';

var utils = require('../utils/writer.js');
var Transaction = require('../service/TransactionService');

module.exports.getSkuTransaction = function getSkuTransaction (req, res, next) {
  var sku = req.params.sku;
 
  console.log("sku Value is:" + sku);
  Transaction.getSkuTransaction(sku)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransactions = function getTransactions (req, res, next) {
  Transaction.getTransactions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
