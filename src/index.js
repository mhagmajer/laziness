/* @flow */

module.exports.forEach = require('./for-each');
module.exports.map = require('./map');
module.exports.range = require('./range');
module.exports.slice = require('./slice');

module.exports.Laziness = require('./laziness');

module.exports.default = module.exports.Laziness;
