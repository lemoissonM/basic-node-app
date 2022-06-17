const validator = (schema) => ((req, res, next) => {
  const { body, query, params } = req;
  const { error } = schema.validate({ ...body, ...query, ...params });
  if (error) {
    const {
      details: [detail = null],
    } = error;
    const { message } = detail;
    return res.status(400).json({
      message,
      error_code: 400,
    });
  }
  return next();
});

module.exports = validator;
