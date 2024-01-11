const NOMBRE_TABLAS = require('../constants/nombreTablas');
const Conexion = require('../database/Conexion');
const instaciaConexion = new Conexion();

class ConexionUserTask {
    asignarTarea = async(idUsuario, idTarea) => {
        let resultado = 0
        try {
            resultado = await instaciaConexion.query(`INSERT INTO ${NOMBRE_TABLAS.TABLA_USUARIO_TAREAS} VALUES(null, ?, ?)`, [idUsuario, idTarea])
        } catch (error) {
            throw error
        }
        return resultado
    }

    getAsignacion = async(idUsuario, idTarea) => { 
        let resultado = 0
        try{
            resultado = await instaciaConexion.query(`SELECT * FROM ${NOMBRE_TABLAS.TABLA_USUARIO_TAREAS} WHERE id_usuario = ? AND id_tarea = ?`, [idUsuario, idTarea])
            if (resultado.length == 0) {
                resultado = null
            }
        }catch(error) {
            throw error
        }
        return resultado
    }
}

module.exports = ConexionUserTask