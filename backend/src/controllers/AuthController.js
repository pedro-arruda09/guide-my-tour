const AuthService = require('../services/AuthService');
const utils = require('../utils');

module.exports = {
    async store(req, res) {
        try {
            const auth = await AuthService.store({
                ...req.body
            });

            return utils.handleResponse(res, auth);
        } catch(e) {
            console.log(e);
            return utils.handleError(res, e);
        }
    }
};