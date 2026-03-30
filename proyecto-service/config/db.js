const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://mongo:27017/proyectosDB');
        console.log('🔥 MongoDB conectado');
    } catch (error) {
        console.error('❌ Error conectando a MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;