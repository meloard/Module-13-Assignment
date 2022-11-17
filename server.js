const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 6480;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
