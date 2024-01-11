const NOMBRE_TABLAS = require('../constants/nombreTablas');
const Conexion = require('../database/Conexion');
const instaciaConexion = new Conexion();

class ConexionUsuario {
    insertarUsuario = async(nombre, email, password) => {
        let resultado = 0
        try {
            resultado = await instaciaConexion.query(`INSERT INTO ${NOMBRE_TABLAS.TABLA_USUARIOS} VALUES (null, ?, ?, ?)`, [nombre, email, password])
        } catch (error) {
            throw error
        }
        return resultado
    }

    // Funcion solo utilizada en los middleware
    getUsuario = async(id) => {
        let resultado = 0
        try {
            resultado = await instaciaConexion.query(`SELECT * FROM ${NOMBRE_TABLAS.TABLA_USUARIOS} WHERE id = ?`, [id]);
            if (resultado.length === 0) {
                resultado =  null;
            }
            return resultado;
        } catch (error) {
            resultado = null
        }
        return resultado
    }

    getUsuarioEmail = async(email) => {
        let resultado = 0
        try {
            resultado = await instaciaConexion.query(`SELECT * FROM ${NOMBRE_TABLAS.TABLA_USUARIOS} WHERE id = ?`, [email]);
            if (resultado.length === 0) {
                resultado =  null;
            }
            return resultado;
        } catch (error) {
            resultado = null
        }
        return resultado
    }

    deleteUsuario = async(id) => {
        let resultado = 0
        try {
            resultado = await instaciaConexion.query(`DELETE FROM ${NOMBRE_TABLAS.TABLA_USUARIOS} WHERE id = ?`, [id])
        } catch (error) {
            throw error
        }
        return resultado
    }

    updateUsuario = async(nombre, email, password, id) => {
        let resultado = 0
        try {
            resultado = await instaciaConexion.query(`UPDATE ${NOMBRE_TABLAS.TABLA_USUARIOS} SET nombre = ?, email = ?, password = ? WHERE id = ?`, [nombre, email, password, id])
        } catch (error) {
            throw error
        }
        return resultado
    }

    getUsuarios = async() => {
        let resultado = 0
        try {
            resultado = await instaciaConexion.query(`SELECT * FROM ${NOMBRE_TABLAS.TABLA_USUARIOS}`)
        } catch (error) {
            throw error
        }
        return resultado
    }

    checkLogin = async() => {
        return 0
    }

}

module.exports = ConexionUsuario