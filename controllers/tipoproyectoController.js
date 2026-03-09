
const Model = require("../models/TipoProyecto");

exports.crear = async (req,res)=>{
 try{
   const data = new Model(req.body);
   await data.save();
   res.status(201).json(data);
 }catch(e){res.status(500).json(e)}
};

exports.listar = async (req,res)=>{
 const data = await Model.find();
 res.json(data);
};

exports.obtener = async (req,res)=>{
 const data = await Model.findById(req.params.id);
 res.json(data);
};

exports.actualizar = async (req,res)=>{
 const data = await Model.findByIdAndUpdate(req.params.id,req.body,{new:true});
 res.json(data);
};

exports.eliminar = async (req,res)=>{
 await Model.findByIdAndDelete(req.params.id);
 res.json({mensaje:"Eliminado"});
};
