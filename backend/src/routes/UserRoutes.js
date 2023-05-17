const express = require('express');
const UserController = require('../controllers/UserController');
// const loginRequired = require('../middlewares/loginRequired');
const Validate = require('../middlewares/validateSchema');
const UserSchema = require('../schemas/UserSchema');

const routes = express.Router();

routes.post('/users', Validate(UserSchema.store),UserController.store);

// routes.use(loginRequired);

module.exports = routes;