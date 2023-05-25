const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userShema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userShema.plugin(uniqueValidator);

const User = mongoose.model('User', userShema);

module.exports = User;
