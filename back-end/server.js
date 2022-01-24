const express = require('express');
require('dotenv').config();
//connect DB
const connectDB = require('./configs/db');

connectDB();

const cors = require('cors');

const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');

//import Error Handler
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// mount the route
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/posts', postRoute);

// Unhandled Route
app.all('*', (req, res, next) => {
    // message + statusCode
  const err = new Error('The route cannot be found!');
  err.statusCode = 404;
  next(err);
});
app.use(errorHandler);

app.listen(process.env.APP_PORT, () => {
  console.log('listening on port' + process.env.APP_PORT);
});
