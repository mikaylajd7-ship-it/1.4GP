// Load the configuration that matches NODE_ENV.
// Development is the default environment in server.js.
module.exports = require('./env/' + process.env.NODE_ENV);
