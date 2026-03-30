const connectDB = require('./config/db');
connectDB();
console.log("🔥 ESTE ES EL APP CORRECTO 🔥");
const express = require('express');
const mongoose = require('mongoose');
const proyectoRoutes = require('./routes/proyectoroutes');

const app = express();

// Middleware
app.use(express.json());

// Conexión a MongoDB
//mongoose.connect('mongodb://127.0.0.1:27017/universidad')
//    .then(() => {
 //       console.log('Mongo conectado');
//    })
//    .catch((err) => {
  //      console.log('Error Mongo:', err);
 //   });

// Rutas
app.use('/api/proyectos', proyectoRoutes);

// Servidor
app.listen(3001, () => {
    console.log('Microservicio corriendo en puerto 3001');
});
app.get('/', (req, res) => {
    res.send("🔥 ROOT 3001 🔥");
});
app.get('/', (req, res) => {
    res.send("🔥 ROOT MICROSERVICIO 3001 🔥");
});