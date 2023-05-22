const Yup = require('yup');

const schema = {
    store: {
        body: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(3).required(),
        }).noUnknown()
    }
}

module.exports = schema;