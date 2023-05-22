const { Model, DataTypes, Sequelize } = require('sequelize');
const bcryptjs = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      password_hash: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      password: {
        type: DataTypes.VIRTUAL,
        defaultValue: '',
      },
      birth_country: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      birth_date: {
        type: DataTypes.DATEONLY,
        defaultValue: ''
      },
      age: {
        type: DataTypes.INTEGER,
        defaultValue: ''
      }
    }, {
      sequelize,
      paranoid: true,
    });

    this.addHook('beforeSave', async user => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

module.exports = User;