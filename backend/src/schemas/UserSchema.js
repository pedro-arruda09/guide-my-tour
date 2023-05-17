const Yup = require('yup');

const schema = {
  store: {
    body: Yup.object().shape({
      name: Yup.string().required().min(3).max(255),
      email: Yup.string().required().min(1).max(255),
      password: Yup.string().required().min(6).max(255),
      birth_date: Yup.date().required(),
      age: Yup.number().required(),
    })
  }
}

module.exports = schema;