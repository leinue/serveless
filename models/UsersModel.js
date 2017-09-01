import mongoose from 'mongoose';

var usersSchema = new mongoose.Schema({
  email:  String,
  username: String,
  password: String,
  token: String,
  date: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
});

export default mongoose.model('Users', usersSchema);
