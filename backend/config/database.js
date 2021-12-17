const mongoose = require('mongoose') ;
mongoose.Promise = global.Promise;
require('dotenv').config();
// mongodb+srv://jean:Ellen@2021@cluster0.o55rz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('connection successful'))
  .catch((err) => console.error(err))

