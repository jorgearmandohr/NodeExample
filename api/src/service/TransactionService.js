'use strict';


/**
 * Returns a transaction collection by sku
 *
 * sku String the sku value to filter by
 * returns Transactions
 **/
exports.getSkuTransaction = function(sku) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : "24.8",
  "currency" : "CAD",
  "sku" : "W4442"
}, {
  "amount" : "24.8",
  "currency" : "CAD",
  "sku" : "W4442"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of transactions
 *
 * returns Transactions
 **/
exports.getTransactions = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : "24.8",
  "currency" : "CAD",
  "sku" : "W4442"
}, {
  "amount" : "24.8",
  "currency" : "CAD",
  "sku" : "W4442"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

