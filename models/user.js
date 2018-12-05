const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profilePicture: String,
  bio: String,
  city: String,
  location: {
    lat: Number,
    lng: Number
  },
  followers: [ { type: mongoose.Schema.ObjectId, ref: 'User' }]
});

// userSchema.virtual('following', {
//   ref: 'User',
//   localField: '_id',
//   foreignField: 'followers'
// });
//
// userSchema.set('toJSON', {
//   virtuals: true
// });

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
