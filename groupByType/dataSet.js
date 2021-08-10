const baseOffer = {
  product: 123,
  formId: 123,
  service: 123
}

const baseTransaction = {
  description: 111,
  id: 222,
  service: 333,
  formId: 444,
  type: 'transaction',
  success: 555
}

const baseError = {
  error: 'asd',
  type: 'error',
  formId: 'formId'
}

module.exports = {
  baseError,
  baseOffer,
  baseTransaction
}
