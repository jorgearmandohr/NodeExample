'use strict';

var utils = require('../utils/writer.js');
var Rates = require('../service/RatesService');

module.exports.getRates = function getRates (req, res, next) {
  Rates.getRates()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
