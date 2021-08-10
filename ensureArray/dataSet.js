const dataSet = []

for (let i = 0; i < 10000; i++) {
  dataSet.push(i)
  dataSet.push([i])
  dataSet.push()
}

module.exports = dataSet
