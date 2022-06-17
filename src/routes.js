const express = require('express');
const { saveAverageLocation, getData } = require('./controllers');
const joiValidator = require('./middlewares/joiValidator');
const { saveLocationValidation } = require('./validators/location');

const router = express.Router();

router.post('/location', joiValidator(saveLocationValidation), saveAverageLocation);
router.get('/location', getData);

module.exports = router;
