import { Schema } from 'mongoose';

var helloSchema = new Schema({
  email:  String,
  lastIP: String,
});

export default global.db.model('Hello', helloSchema);
