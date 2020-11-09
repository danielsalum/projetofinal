console.log('(Dentro de databse.js)DATABASE_URL==>>', process.env.DATABSE_URL);
module.exports = {
  url: process.env.DATABASE_URL,
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "webproj2",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};