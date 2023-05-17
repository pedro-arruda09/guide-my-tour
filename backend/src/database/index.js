const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

const Models = [User];

const connection = new Sequelize(dbConfig);

Models.forEach(model => model.init(connection));
Models.forEach(model => model.associate && model.associate(connection.models));

module.exports = connection;