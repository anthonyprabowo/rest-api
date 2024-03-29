'use strict';

// load modules
const express = require('express');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const userRoute = require('./routes/userRoute');
const coursesRoute = require('./routes/coursesRoute');
const cors = require('cors');
const path = require('path');

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// create the Express app
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// create sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'fsjstd-restapi.db'
});

// setup morgan which gives us http request logging
app.use(morgan('dev'));

// use cors as middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH"]
}));

// test db connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully!');
  } catch (err) {
    console.error('Unable to connect to the database: ', err);
  }
}
testConnection();

// middleware
app.use(express.json());

// setup a friendly greeting for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the REST API project!',
  });
});

// get user route
app.use('/api/users', userRoute);

// get courses route
app.use('/api/courses', coursesRoute);

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname , 'public', 'index.html'));
});

// setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

// set our port
app.set('port', process.env.PORT || 5000);

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
