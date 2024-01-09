const {response,request} = require('express');
const Conexion = require('../models/Conexion');

const crearTarea = (req = request, res = response) => { 
    const conx = new Conexion()

    conx.insertarTarea(req.body.descripcion, req.body.duracion, req.body.dificultad, req.body.realizada)
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
    const conx = new Conexion()
    conx.getTareas()
        .then( msg => {
            res.status(200).json(msg)
        })
        .catch( err => { 
            res.status(203).json({'msg':'No se han encontrado registros'});
        })
}

const borrarTarea = (req, res = response) => { 
    const conx = new Conexion()

    conx.deleteTarea(req.params.id)
        .then( msg => {
            res.status(200).json(msg)
        })
        .catch( err => { 
            res.status(203).json(err)
        })
}

const actualizarTarea = (req, res = response) => {
    const conx = new Conexion()
    conx.updateTarea(req.params.id, req.body.descripcion, req.body.duracion, req.body.dificultad, req.body.realizada)
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