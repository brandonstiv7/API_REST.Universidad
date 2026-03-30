const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
    numero: { type: String, required: true, unique: true },
    titulo: { type: String, required: true },
    fechaInicio: { type: Date },
    fechaEntrega: { type: Date },
    valor: { type: Number },
    cliente: { type: String },
    universidad: { type: String },
    tipoProyecto: { type: String },
    etapa: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Proyecto', proyectoSchema);