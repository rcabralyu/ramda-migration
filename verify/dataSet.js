const validNormalizations = { car: ['car_brand', 'car_model', 'car_type'] };

const validNormalization = {
  car: {
    "car_model": "406",
    "car_detail": "",
    "car_brand": "23",
    "car_type": "5"
  }
}

const invalidNormalizations = [
  {},
  { car: {} },
  { car: { model: 406 } },
  { car: { car_model: 406 }
}]

module.exports = {
  validNormalization,
  invalidNormalizations,
  validNormalizations
}
