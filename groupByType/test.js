const { groupByTypeV1, groupByType } = require('./index')
const { baseOffer, baseTransaction, baseError } = require('./dataSet')

console.time('ramda-type')
for (let i = 0; i < 10000; i++) {
  groupByTypeV1([])
  groupByTypeV1([baseOffer])
  groupByTypeV1([baseTransaction])
  groupByTypeV1([baseError])
  groupByTypeV1([baseOffer, baseTransaction, baseError])
}
console.timeEnd('ramda-type')

console.time('vanilla-type')
for (let i = 0; i < 10000; i++) {
  groupByType([])
  groupByType([baseOffer])
  groupByType([baseTransaction])
  groupByType([baseError])
  groupByType([baseOffer, baseTransaction, baseError])
}
console.timeEnd('vanilla-type')
