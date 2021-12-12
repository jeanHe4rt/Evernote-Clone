var express = require('express');
var path = require('path');
var logger = require('morgan');
require('./config/database');
const cors = require('cors');


// let corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200
// }

var usersRouter = require('./app/routes/users');
let notesRouter = require('./app/routes/noutes');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

// app.listen(3000, function() {
//   console.log('CORS-enabled web server listening on port 3000')
// });

module.exports = app