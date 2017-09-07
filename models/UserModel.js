import { Schema } from 'mongoose';

var userSchema = new Schema({
  email:  String,
  emailVerified: { type: Boolean, default: false },
  username: String,
  nickname: String,
  company: String,
  photo: String,
  type: Schema.Types.ObjectId,
  identidy: Schema.Types.ObjectId,
  Browser: String,
  password: String,
  token: String,
  tokenExpiredAt: Date,
  loginsCount: Number,
  lastLogin: { type: Date, default: Date.now },
  lastIP: String,
  connection: Schema.Types.ObjectId,
  signedUp: { type: Date, default: Date.now },
  blocked: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false }
});

var userLocationSchema = new Schema({
	user: Schema.Types.ObjectId,
	when: { type: Date, default: Date.now },
	where: String
});

var userLoginHistorySchema = new Schema({
	user: Schema.Types.ObjectId,
	when: { type: Date, default: Date.now },
	identity: Schema.Types.ObjectId,
	app: Schema.Types.ObjectId,
	event: { type: Boolean, default: false },
	ip: String
});

var userPrivilegesSchema = new Schema({
	user: Schema.Types.ObjectId,
	group: [Schema.Types.ObjectId]
});

var userGroupsSchema = new Schema({
	name: String,
	createdAt: { type: Date, default: Date.now }
});

var userGroupsPrivilegesSchema = new Schema({
	group: Schema.Types.ObjectId,
	privilege: Schema.Types.ObjectId
});

var privilegesSchmea = new Schema({
	name: String,
	route: String
});

export default global.db.model('User', userSchema);
