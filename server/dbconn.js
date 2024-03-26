import mongoose from 'mongoose';

const dbconn = () => {
  mongoose.connect('mongodb://localhost:27017/crud');
};

export default dbconn;
