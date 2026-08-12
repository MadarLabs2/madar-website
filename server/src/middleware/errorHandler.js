const config = require('../config');

const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found',
  });
};

const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message =
    config.nodeEnv === 'production' && status === 500
      ? 'Internal server error'
      : err.message || 'Internal server error';

  if (config.nodeEnv !== 'production') {
    console.error(err);
  }

  res.status(status).json({
    success: false,
    message,
    ...(config.nodeEnv !== 'production' && err.errors ? { errors: err.errors } : {}),
  });
};

module.exports = { notFound, errorHandler };
