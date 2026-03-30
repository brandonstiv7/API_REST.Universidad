
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mongo-universidad:27017/universidad');
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error conectando MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;