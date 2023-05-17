const User = require('../models/User');

module.exports = {
    store(data) {
        return User.create(data);
    }
}