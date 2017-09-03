import { Schema } from 'mongoose';

var userSchema = new Schema({
  email:  String,
  username: String,
  password: String,
  token: String,
  date: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
});

export default global.db.model('User', userSchema);
