const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI
    await mongoose.connect(uri) 
      console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed', error);
  }
};

module.exports = connectDB;