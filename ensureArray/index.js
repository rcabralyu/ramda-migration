const R = require('ramda')

const ensureArrayV1 = (value) => R.cond([
  [R.isNil, R.always([])],
  [Array.isArray, R.always(value)],
  [R.T, R.always([value])]
])(value);

function ensureArray (value) {
  return value == null ? [] : Array.isArray(value) ? value : [value]
}

module.exports = {
  ensureArray,
  ensureArrayV1
}
