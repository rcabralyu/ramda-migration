const dataSet = require('./dataSet')
const { pickResponseData, pickResponseDataV1, pickResponseDataV2 } = require('./index')

console.time('Ramda-pick-response-data')
for (let i = 0; i < dataSet.length; i++) {
  pickResponseDataV1(dataSet[i])
}
console.timeEnd('Ramda-pick-response-data')

console.time('Vanilla-pick-response-data-not-nice')
for (let i = 0; i < dataSet.length; i++) {
  pickResponseDataV2(dataSet[i])
}
console.timeEnd('Vanilla-pick-response-data-not-nice')

console.time('Vanilla-pick-response-data')
for (let i = 0; i < dataSet.length; i++) {
  pickResponseData(dataSet[i])
}
console.timeEnd('Vanilla-pick-response-data')
