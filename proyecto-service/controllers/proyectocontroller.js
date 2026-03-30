console.log("🔥 ESTE ES EL CONTROLLER NUEVO 🔥");

const getAll = (req, res) => {
    res.send("🔥 MICROSERVICIO NUEVO FUNCIONANDO 🔥");
};

const create = (req, res) => {
    res.send("🔥 POST FUNCIONA 🔥");
};

module.exports = { getAll, create };