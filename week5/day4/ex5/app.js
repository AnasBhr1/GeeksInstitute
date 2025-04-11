// app.js
const _ = require('lodash');
const math = require('./math');

const nums = [5, 10, 15];

const sum = _.sum(nums);
const product = _.reduce(nums, (acc, val) => math.multiply(acc, val), 1);

console.log('Sum using lodash:', sum);
console.log('Product using custom math module:', product);
