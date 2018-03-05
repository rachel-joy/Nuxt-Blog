const express = require("express");
const { postgraphile } = require("postgraphile");


module.exports = function (req, res, next) {
    // req is the Node.js http request object
    console.log(req.path)
    const app = express();

    app.use(postgraphile(process.env.DATABASE_URL || "postgres://localhost/"));

    app.listen(process.env.PORT || 3000);

    // res is the Node.js http response object

    // next is a function to call to invoke the next middleware
    // Don't forget to call next at the end if your middleware is not an endpoint!
    next()
    return app;
}