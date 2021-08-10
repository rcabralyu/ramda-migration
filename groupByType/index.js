const R = require('ramda')

const groupByTypeV1 = (list) =>
   R.groupBy(R.prop('type'), list);

function groupBy (list, prop) {
  const map = new Map()
  list.map(item => {
    const key = item[prop]
    const collection = map.get(key);
    if (!collection) {
        map.set(key, [item]);
    } else {
        collection.push(item);
    }
  })
  return Object.fromEntries(map)
}

function groupByType(list) {
  return groupBy(list, 'type')
}

module.exports = {
  groupByType,
  groupByTypeV1
}
