import mongoose from 'mongoose';

var usersSchema = new mongoose.Schema({
	count: Number
});

export default mongoose.model('Users', usersSchema);
