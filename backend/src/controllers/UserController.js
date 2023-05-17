const UserService = require('../services/UserService');
const utils = require('../utils');

module.exports = {
    async store(req, res) {
        try {
            const createUser = await UserService.store({
                ...req.data
            });

            return utils.handleResponse(res, createUser);
        } catch(e) {
            console.log(req.body, 'req');
            console.log(e);
        }
    }
}