const {response,request} = require('express');
const Conexion = require('../database/ConexionTask');
const instConexion = new Conexion()

const crearTarea = (req = request, res = response) => { 
    instConexion.insertarTarea(req.body.descripcion, req.body.duracion, req.body.dificultad, req.body.realizada)
        .then( msg =>  {
            console.log('Tarea creada')
            res.status(200).json(msg)
        })
        .catch( err => {
            console.log('Fallo al crear la tarea')
            res.status(203).json(err)
        })
}

const obtenerTodasLasTareas = (req, res) => {
    instConexion.getTareas()
        .then( msg => {
            res.status(200).json(msg)
        })
        .catch( err => { 
            res.status(203).json({'msg':'No se han encontrado registros'});
        })
}


const borrarTarea = (req, res = response) => { 
    instConexion.deleteTarea(req.params.id)
        .then( msg => {
            res.status(200).json(msg)
        })
        .catch( err => { 
            res.status(203).json(err)
        })
}

const actualizarTarea = (req, res = response) => {
    instConexion.updateTarea(req.params.id, req.body.descripcion, req.body.duracion, req.body.dificultad, req.body.realizada)
    .then( msg => { 
        res.status(200).json(msg)
    })
    .catch( err => { 
        res.status(203).json(err)
    });
}

module.exports = {
    crearTarea,
    obtenerTodasLasTareas,
    borrarTarea,
    actualizarTarea
}