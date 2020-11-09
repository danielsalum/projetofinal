const dotenv = require("dotenv");
const api = require("./Api.js");

dotenv.config();
console.log('(dentro de server.js)DATABSE_URL==>',process.env.DATABASE_URL);
console.log('(dentro de server.js)PORT==>',process.env.PORT);
api.listen(process.env.PORT || 3333);