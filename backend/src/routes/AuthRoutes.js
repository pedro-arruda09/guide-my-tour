const express = require('express');
const AuthController = require('../controllers/AuthController');
const Validate = require('../middlewares/validateSchema');
const AuthSchema = require('../schemas/AuthSchema');

const routes = express.Router();

routes.post('/login', AuthController.store);

module.exports = routes;