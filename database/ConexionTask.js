const NOMBRE_TABLAS = require('../constants/nombreTablas');
const Conexion = require('../database/Conexion');
const instaciaConexion = new Conexion();

class ConexionTask {
    insertarTarea = async(descripcion, duracion, dificultad, realizada) => {
        let resultado = 0;
        try {
            resultado = await instaciaConexion.query(`INSERT INTO ${NOMBRE_TABLAS.TABLA_TAREAS} VALUES (?, ?, ?, ?, ?)`, [null, duracion, dificultad, realizada, descripcion]);
        } catch (error) {
            throw error;
        }
        return resultado;
    }
    
    getTareas = async () => {
        let resultado = []
        try {
            resultado = await instaciaConexion.query(`SELECT * FROM ${NOMBRE_TABLAS.TABLA_TAREAS}`)
        } catch (error) {
            throw error;
        }
        return resultado;
    }
    getTarea = async (idTarea) => {
        let resultado = 0
        try {
            resultado = await instaciaConexion.query(`SELECT * FROM ${NOMBRE_TABLAS.TABLA_TAREAS} WHERE id = ?`, [idTarea])
            if (resultado.length === 0) {
                resultado = null
            }
        } catch (error) {
            resultado = null
        }
        return resultado;
    }
    
    deleteTarea = async (id) => {
        let resultado = 0
        try {
            resultado = await instaciaConexion.query(`DELETE FROM ${NOMBRE_TABLAS.TABLA_TAREAS} WHERE id = ?`, [id])
        } catch (error) {
            throw error;
        }
        return resultado;
    }
    
    updateTarea = async (id, descripcion, duracion, dificultad, realizada) => { 
        let resultado = 0
        try {
            resultado = await instaciaConexion.query(`UPDATE ${NOMBRE_TABLAS.TABLA_TAREAS} SET descripcion = ?, duracion = ?, dificultad = ?, realizada = ? WHERE id = ?`, 
            [descripcion, duracion, dificultad, realizada, id]);
        } catch (error) {
            throw error;
        }
        return resultado;
    }

}



module.exports = ConexionTask