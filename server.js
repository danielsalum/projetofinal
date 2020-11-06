const dotenv = require("dotenv");
const api = require("./Api.js");

dotenv.config();

api.listen(process.env.PORT || 3333);
