const express = require('express');
const { saveAverageLocation } = require('./controllers');
const joiValidator = require('./middlewares/joiValidator');
const { saveLocationValidation } = require('./validators/location');

const router = express.Router();

router.post('/location', joiValidator(saveLocationValidation), saveAverageLocation);

module.exports = router;
