const R = require('ramda')

const pickResponseDataV1 = R.pick(['data', 'status', 'headers']);

const pickResponseDataV2 = (({ data, status, headers }) => ({ data, status, headers }))

function pickResponseData (response) {
  return {
    data: response.data,
    status: response.status,
    headers: response.headers
  }
}

module.exports = {
  pickResponseDataV1,
  pickResponseDataV2,
  pickResponseData
}
