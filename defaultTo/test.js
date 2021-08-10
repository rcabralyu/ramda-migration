const dataSet = require('./dataSet')
const { defaultToEmptyObject, defaultToEmptyObjectV1 } = require('./index')

console.time('Ramda-default-to-empty-object')
for (let i = 0; i < dataSet.length; i++) {
  defaultToEmptyObjectV1(dataSet[i])
}
console.timeEnd('Ramda-default-to-empty-object')

console.time('Vanilla-default-to-empty-object')
for (let i = 0; i < dataSet.length; i++) {
  defaultToEmptyObject(dataSet[i])
}
console.timeEnd('Vanilla-default-to-empty-object')
