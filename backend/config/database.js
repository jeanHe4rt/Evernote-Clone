const mongoose = require('mongoose') ;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/evernoteDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('connection successful'))
  .catch((err) => console.error(err))