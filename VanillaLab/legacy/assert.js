const assert = require('assert');


const returnFalse = () => {
  return false;
};

assert(returnFalse() === false);
assert.ok(!returnFalse());
// assert.ifError(returnFalse());

assert.equal(returnFalse(), '');
assert.notEqual(returnFalse(), '');