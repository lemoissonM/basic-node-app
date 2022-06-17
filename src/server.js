const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.get('*', (req, res) => {
  res.send('The resource you\'re looking for has not been found on the server ', 404);
});

module.exports = app;
