const jwt = require("jsonwebtoken")
const Yup = require("yup")

const User = require("../models/User")
const authConfig = require("../config/auth")

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "falha ao validar" });
    }
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Usuario nao pertence a base" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    const { id, name, isAdm } = user;
    res.cookie("id", id);
    res.cookie("isAdm", isAdm);
    // console.log(res);

    // console.log("this is cookie", res);

    return res.redirect("http://localhost:3333/files");
  }

  async logout(req, res, next) {
    res.clearCookie("id");

    return res.redirect("http://localhost:3333/");
    next();
  }

  async getUser(req, res) {
    // console.log(userId);
    console.log(req.query.id);
    const { id } = req.query;

    return await User.findOne({ where: { id } });
  }

  async login(req, res, next) {
    if (req.cookies && req.cookies.id) {
      res.redirect("http://localhost:3333/files");
      return;
    }
    res.redirect("http://localhost:3333/login");
  }
}

module.exports = new SessionController();
