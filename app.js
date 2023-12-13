const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRotuer = require('./routes/auth');
const articlesRouter = require('./routes/articles');
const recipientsRouter = require('./routes/recipients');
const scholarshipRouter = require('./routes/scholarship');
const { errorHandler } = require('./middlewares/errorHandler');
const { authectication } = require('./middlewares/authentication');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRotuer);
app.use('/users', authectication, usersRouter);
app.use('/recipients', recipientsRouter);
app.use('/articles', articlesRouter);
app.use('/scholarships', scholarshipRouter);
app.use(errorHandler)

module.exports = app;