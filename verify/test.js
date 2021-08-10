const { verify, verifyV1 } = require('./index')
const { validNormalization, validNormalizations, invalidNormalizations } = require('./dataSet')

console.time('Ramda-normalize-validation')
for (let i = 0; i < 10000; i++) {
  verifyV1(validNormalization, validNormalizations)
  verifyV1(null, validNormalizations)
  verifyV1(invalidNormalizations[0], validNormalizations)
  verifyV1(invalidNormalizations[1], validNormalizations)
  verifyV1(invalidNormalizations[2], validNormalizations)
  verifyV1(invalidNormalizations[3], validNormalizations)
}
console.timeEnd('Ramda-normalize-validation')

console.time('Vanilla-normalize-validation')
for (let i = 0; i < 10000; i++) {
  verify(validNormalization, validNormalizations)
  verify(null, validNormalizations)
  verify(invalidNormalizations[0], validNormalizations)
  verify(invalidNormalizations[1], validNormalizations)
  verify(invalidNormalizations[2], validNormalizations)
  verify(invalidNormalizations[3], validNormalizations)
}
console.timeEnd('Vanilla-normalize-validation')
