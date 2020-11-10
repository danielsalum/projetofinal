const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

require("./database");

class Api {
  constructor() {
    this.server = express();
    this.routes();
    this.middlewares();

  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cookieParser());
    this.server.use(bodyParser());
    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
    );

    this.server.use(express.static('client/build'));

    this.server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
    // this.server.use("views", "../views");

    this.server.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      this.server.use(cors());
      next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new Api().server;
