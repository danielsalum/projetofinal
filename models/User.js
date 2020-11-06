const {Sequelize, Model } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        isAdm: Sequelize.BOOLEAN,
      },

      {
        sequelize,
      }
    );
  }

  checkPassword(password) {
    if (password === this.password) return true;
  }
}

module.exports = User;
