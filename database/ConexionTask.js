const Conexion = require('../database/Conexion');
const instaciaConexion = new Conexion();

class ConexionTask {
    insertarTarea = async(descripcion, duracion, dificultad, realizada) => {
        let resultado = 0;
        try {
            resultado = await instaciaConexion.query('INSERT INTO tareas VALUES (?, ?, ?, ?, ?)', [null, duracion, dificultad, realizada, descripcion]);
        } catch (error) {
            throw error;
        }
        return resultado;
    }
    
    getTareas = async () => {
        let resultado = []
        try {
            resultado = await instaciaConexion.query('SELECT * FROM tareas')
        } catch (error) {
            throw error;
        }
        return resultado;
    }
    
    deleteTarea = async (id) => {
        let resultado = 0
        try {
            resultado = await instaciaConexion.query('DELETE FROM tareas WHERE id = ?', [id])
        } catch (error) {
            throw error;
        }
        return resultado;
    }
    
    updateTarea = async (id, descripcion, duracion, dificultad, realizada) => { 
        let resultado = 0
        try {
            resultado = await instaciaConexion.query(`UPDATE tareas SET descripcion = ?, duracion = ?, dificultad = ?, realizada = ? WHERE id = ?`, 
            [descripcion, duracion, dificultad, realizada, id]);
        } catch (error) {
            throw error;
        }
        return resultado;
    }
}



module.exports = ConexionTask