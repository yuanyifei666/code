'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modelA = require('./modelA');

console.log(_modelA.userName, _modelA.userAge); //引入提供的接口


var user = { name: 'haha' };
exports.default = user;