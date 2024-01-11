const { response, request } = require('express');
const controlador = require('../controllers/userController');
const userConexion = require('../database/ConexionUsuario');
const taskConexion = require('../database/ConexionTask');
const userTarea = require('../database/ConexionUserTask');

const usuarioConexion = new userConexion();
const tareaConexion = new taskConexion();
const usuarioTareaConexion = new userTarea();

const checkId = (req, res, next) => {
    const id = req.params.id
    if (isNaN(id) || id < 1) {
        res.status(404).json({ 'message': '' })
    } else {
        next()
    }
}

const existeUsuario = (req, res, next) => { 
    usuarioConexion.getUsuario(req.params.idUsuario)
        .then(usuario => {
            if (usuario === null) {
                res.status(404).json({ 'message': 'Usuario no existe' });
            } else {
                next();
            }
        })
        .catch(error => {
            console.error("Error en existeUsuario:", error);
            res.status(500).json({ 'message': 'Error interno del servidor' });
        });
}

const existeTarea = (req, res, next) => {
    tareaConexion.getTarea(req.params.idTarea)
        .then(tarea => { 
            if (tarea == null) {
                res.status(404).json({ 'message': 'Tarea no existe' });
            }else {
                next();
            }
        })
        .catch(err => {
            res.status(500).json({ 'message': err.message });
        })
}

const tareaAsignada = (req, res, next) => { 
    usuarioTareaConexion.getAsignacion(req.params.idUsuario, req.params.idTarea)
        .then(usuarioTarea => {
            if(usuarioTarea == null) { 
                next();
            }else {
                res.status(404).json({ 'message': 'Este usuario ya tiene una tarea asignada' });
            }
        })
        .catch(err => { 
            res.status(500).json({ 'message': err.message });
        })
}

const checkEmail = (req, res, next) => { 
    usuarioConexion.getUsuarioEmail(req.body.email)
        .then(usuario => {
            if (usuario === null) {
                res.status(404).json({ 'message': 'Este email ya está registrado' });
            } else {
                next();
            }
        })
        .catch(error => {
            console.error("Error en existeUsuario:", error);
            res.status(500).json({ 'message': 'Error interno del servidor' });
        });
}

const checkCredentials = (req, res, next) => { 
    usuarioConexion.checkLogin(req,body.email, req.body.password)
        .then(usuario => {
            if (usuario == null) {
                res.status(404).json({ 'message': 'Credenciales incorrectas' });
            }else {
                next();
            }
        })
        .catch(error => {
            console.error("Error en existeUsuario:", error);
            res.status(500).json({ 'message': 'Error interno del servidor' });
        });
}

module.exports = {
    checkId,
    existeTarea,
    existeUsuario,
    tareaAsignada,
    checkEmail,
    checkCredentials
}