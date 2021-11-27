const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  name:String,
  email: String, required: true, unique:true,
  password: String, required: true,
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
  author: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);