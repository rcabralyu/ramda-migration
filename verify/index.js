const R = require('ramda')

function verifyV1(normalizations, requireNormalizations) {
  R.pipe(
    R.toPairs,
    R.map(([group, entity]) => (entity).map(entityKey => [group, entityKey])),
    R.unnest,
    R.all(requiredPath => !R.isNil(R.path(requiredPath, normalizations))
  )
  )(requireNormalizations) || (() => { /* throw new Error('Missing homologations'); */ })();
}

function verify(normalizations, requireNormalizations) {
  for (const [key, requiredKeys] of Object.entries(requireNormalizations)) {
    if (normalizations == null ||
        normalizations[key] == null ||
        requiredKeys.some(requiredKey => !Object.keys(normalizations[key]).includes(requiredKey))) {
      // throw new Error('Missing homologations');
      return false
    }
  }
}

module.exports = {
  verify,
  verifyV1
}
