const Conexion  = require('../database/Conexion')
const Tarea = require('../models/Tarea')

const conx = new Conexion()

class ConexionTask {
    insertarTarea = async (body) => {
        let resultado = 0
        conx.conectar()
        try {
            const tareaNueva = await Tarea.create(body)
            resultado = 1
        } catch (error) {
            throw error
        } finally {
            conx.desconectar()
        }
    }

    getTareas = async () => {
        conx.conectar()
        let resultado = await Tarea.findAll()
        conx.desconectar()
        if (!resultado) {
            throw error;
        }
        return resultado
    }

    getTarea = async (id) => {
        conx.conectar()
        let resultado = await Tarea.findByPk(id)
        conx.desconectar()
        if (!resultado) {
            conx.desconectar()
            throw error;
        }
        conx.desconectar()
        return resultado
    }

    deleteTarea = async (idTarea) => {
        conx.conectar()
        let resultado = await Tarea.findByPk(idTarea)
        conx.desconectar()
        if (!resultado) {
            conx.desconectar()
            throw error;
        }
        await resultado.destroy()
        conx.desconectar()
        return resultado
    }

    updateTarea = async (id, body) => {
        conx.conectar()
        let resultado = await Tarea.findByPk(id)
        if (!resultado) {
            conx.desconectar()
            throw error
        }
        await resultado.update(body)
        conx.desconectar()
        return resultado
    }
}

module.exports = ConexionTask