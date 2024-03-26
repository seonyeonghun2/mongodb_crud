import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      max: 50,
    },
    email: {
      type: String,
      trim: true,
      unique: 1,
    },
    password: {
      type: String,
      min: 5,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { collation: 'users' },
);
// Schema를 Model로 감싸줌
const User = mongoose.model('User', userSchema);

export default User;
