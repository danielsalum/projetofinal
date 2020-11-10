//import { where } from "sequelize";
const where = require("sequelize");
const File = require("../models/File");

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });
    return res.json(file);
  }

  async get(req, res) {
    return res.json(await File.findAll());
  }

  async getFileByName(req, res) {
    return res.json(await File.findOne({ where: { name: req.query.name } }));
  }
}

module.exports = new FileController();
