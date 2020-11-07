const { Router } = require("express");
const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const FileController = require("./controllers/FileController");
const multerConfig = require("./config/multer.js");
const multer = require("multer");
const authMiddleware = require("./middleware/auth.js");

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);
routes.get("/getUser", SessionController.getUser);
routes.get("/login", SessionController.login);
routes.get("/logout", SessionController.logout);
routes.post("/uploadFile", upload.single("file"), FileController.store);
routes.get("/getFile", FileController.get);

routes.get("/test", (req,res) => {
  return res.send({Hello: true})
});


// routes.use(authMiddleware);
routes.get("/find");

module.exports = routes;