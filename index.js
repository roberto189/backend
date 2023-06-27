const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const cors = require("cors")
const endpoint = require('express-list-endpoints');
const cwd = process.cwd();

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

console.log(endpoint(app));
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});