console.log('(Dentro de databse.js)DATABASE_URL==>>', process.env.DATABSE_URL);
module.exports = {
  //url: process.env.DATABASE_URL,
  dialect: "postgres",
  host: "ec2-54-237-155-151.compute-1.amazonaws.com",
  username: "dytaxrfqgfbgif",
  password: "2debdd27679170f56124250b03f762cae4119a5f5217672ae4fbbf5549df5fb0",
  database: "d794447f4d1f1k",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
