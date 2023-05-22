const UserModel = require('../models/User');

const jwt = require('jsonwebtoken');
const pkg = require('bcryptjs');
const { compareSync } = pkg;

module.exports = {
    async store(data) {
        const user = await UserModel.findOne({
            where: {
                email: data.email
            },
            raw: true,
            attributes: ['id', 'name', 'email', 'password_hash']
        })

        if (!user) {
            throw new Error('User does not exist!');
        }

        const isValidPassword = compareSync(data.password, user.password_hash);

        if (!isValidPassword) {
            throw new Error('Invalid password!');
        }

        console.log(process.env.TOKEN_SECRET);

        const token = jwt.sign({
            id: user.id,
            email: user.email
        }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION,
        });

        return token;
    }
};
