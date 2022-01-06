/*
Catch errors Handler
*/
exports.catchErrors = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => {
      //Validation errors
      if (typeof err === "string") {
        res.status(400).json({
          message : err,
        })
      } else {
        next (err)
      }
    })
  }
}
/*
Mongoose validation error Handler
*/
exports.mongooseErrors = (err, req, res, next) => {
  if (!err.errors) return next(err);
  const errorKeys = Object.keys(err.errors);
  let message = "";
  errorKeys.forEach((key) => (message += err.errors[key].message + ", "));

  message - message.substr(0, message.length - 2)

  res.status(400).json({
    message,
  })
}
/*
Development Error Handler
*/
exports.developmentErrors = (err, req, res, next) => {
  res.stack = err.stack || ""
  const errorDetails = {
    message: err.mesage,
    status: err.status,
    stak: err.stack,
  }
  res.status(err.status || 500).json(errorDetails) // send JSON back
}
/*
Production Error Handler
*/
exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: "Interval server error, uhh",
    message: (err.stack)
  })
}
/*
404 Page Error
*/
exports.notFound = (req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  })
}
