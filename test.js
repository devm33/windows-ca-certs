const assert = require('assert');
const {all} = require('./index.js');

const pems = all();

if (process.platform === "win32") {
  assert(pems.length > 0);
} else {
  assert(pems.length === 0);
}
