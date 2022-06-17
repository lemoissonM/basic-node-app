const Joi = require('joi');

const abortEarly = false;

const saveLocationValidation = Joi.object().keys({
  lat: Joi.number().required(),
  lng: Joi.number().required(),
  id: Joi.string().required(),
}).options({
  abortEarly,
});

module.exports = {
  saveLocationValidation,
};
