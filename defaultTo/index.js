const R = require('ramda')

const defaultToEmptyObjectV1 = R.defaultTo({});

function defaultToEmptyObject (input) {
  return input ?? {}
}

module.exports = {
  defaultToEmptyObjectV1,
  defaultToEmptyObject
}
