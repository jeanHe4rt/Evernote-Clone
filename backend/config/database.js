var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/evernoteDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
).then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))