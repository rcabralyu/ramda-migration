const dataSet = require('./dataSet')
const { ensureArray, ensureArrayV1 } = require('./index')

console.time('Ramda-ensure-array')
for (let i = 0; i < dataSet.length; i++) {
  ensureArrayV1(dataSet[i])
}
console.timeEnd('Ramda-ensure-array')

console.time('Vanilla-ensure-array')
for (let i = 0; i < dataSet.length; i++) {
  ensureArray(dataSet[i])
}
console.timeEnd('Vanilla-ensure-array')
