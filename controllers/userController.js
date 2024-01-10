const {response,request} = require('express');
const Conexion = require('../database/ConexionUsuario');
const instConexion = new Conexion()

const crearUsuario = (req = request, res = response) => {
    instConexion.insertarUsuario(req.body.nombrem, req.body.email, req.body.password)
        .then(msg => {
            res.status(200).json(msg)
        })
        .catch(err => {
            res.status(203).json(err)
        })
}

const obtenerUsuario = (req = request, res = response) => { 
    instConexion.getUsuario(req.params.id)
        .then(msg => {
            res.status(200).json(msg)
        })
        .catch(err => {
            res.status(203).json(err)
        })
}

const obtenerUsuarios = (req = request, res = response) => { 
    instConexion.getUsuarios()
        .then(msg => {
            res.status(200).json(msg)
        })
        .catch(err => {
            res.status(203).json(err)
        })
}

const borrarUsuario = (req = request, res = response) => { 
    instConexion.deleteUsuario(req.params.id)
        .then(msg => {
            res.status(200).json(msg)
        })
        .catch(err => {
            res.status(203).json(err)
        })
}

module.exports = {
    crearUsuario,
    obtenerUsuario,
    obtenerUsuarios,
    borrarUsuario
}