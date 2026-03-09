
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/database");

const clienteRoutes = require("./routes/clienteRoutes");
const universidadRoutes = require("./routes/universidadRoutes");
const tipoProyectoRoutes = require("./routes/tipoProyectoRoutes");
const etapaRoutes = require("./routes/etapaRoutes");
const proyectoRoutes = require("./routes/proyectoRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/clientes", clienteRoutes);
app.use("/universidades", universidadRoutes);
app.use("/tipos-proyecto", tipoProyectoRoutes);
app.use("/etapas", etapaRoutes);
app.use("/proyectos", proyectoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
