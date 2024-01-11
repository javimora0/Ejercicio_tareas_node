const { response, request } = require('express');
const Conexion = require('../database/ConexionUserTask');
const instConexion = new Conexion()

const asignTarea = (req = request, res = response) => {
    instConexion.asignarTarea(req.params.idUsuario, req.params.idTarea)
        .then(msg => {
            res.status(200).json(msg)
        })
        .catch(err => {
            res.status(203).json(err)
        })
}

module.exports = {
    asignTarea
}