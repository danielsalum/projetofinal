const {Sequelize, Model } = require("sequelize");

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `https://projetofinal2.herokuapp.com/files/${this.path}`;
          },
        },
      },

      {
        sequelize,
      }
    );

    return this;
  }
}
module.exports = File;
