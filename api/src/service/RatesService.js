'use strict';


/**
 * Returns a rates collection
 *
 * returns Rates
 **/
exports.getRates = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "rate" : "1.1",
  "from" : "USD",
  "to" : "EUR"
}, {
  "rate" : "1.1",
  "from" : "USD",
  "to" : "EUR"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

