const express    = require('express');
const bodyParser = require('body-parser');
const logger     = require('morgan');
const mongoose   = require('mongoose');
const routes     = require('./routes');

const PORT = process.env.PORT || 3001;

// Initialize express
const app = express();

// Config middleware
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for AJAX
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Use express.static to serve public folder as static directory
app.use(express.static("client/build"));
// Routes
app.use(routes);

// Configure mongo for Heroku or dev environment
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsScraper";

// Tell mongoose to return Promises
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Starts the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
