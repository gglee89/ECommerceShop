/**
 * @desc Error Middleware (404) - Page Not Found
 */
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * @desc Error Middleware (200)
        Handle 200 responses even though it is an ERROR
        e.g.: /api/products/1 -> returns 200 but it is a DB error
        Hide 'stack' from production        
 */
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
