const { response, request } = require('express');
const controlador = require('../controllers/userController');
const userConexion = require('../database/ConexionUsuario');
const taskConexion = require('../database/ConexionTask');

const usuarioConexion = new userConexion();
const tareaConexion = new taskConexion();
const checkId = (req, res, next) => {
    const id = req.params.id
    if (isNaN(id) || id < 1) {
        res.status(404).json({ 'message': '' })
    } else {
        next()
    }
}

const existeUsuario = (req, res, next) => { 
    let usuario = usuarioConexion.getUsuario(req.params.idUsuario)
    if (usuario.length == 0) {
        res.status(404).json({ 'message': 'Usuario no existe' })
    }else {
        next()
    }
}
const existeTarea = (req, res, next) => {
    let tarea = tareaConexion.getTarea(req.params.idTarea)
    if (tarea.length == 0) {
        res.status(404).json({ 'message': 'Tarea no existe' })
    }else {
        next()
    }
}

module.exports = {
    checkId,
    existeTarea,
    existeUsuario
}