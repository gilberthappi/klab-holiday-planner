import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: String,
  fullNames: String,
  location: String,
  role: { type: String, default: 'user' },

});

export const USER = mongoose.model('user', userSchema);