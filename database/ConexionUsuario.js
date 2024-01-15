const Conexion = require('../database/Conexion')
const Usuario = require('../models/Usuario')
const conx = new Conexion()


class ConexionUsuario {
    insertarUsuario = async (body) => {
        let resultado = 0
        conx.conectar()
        try {
            const usuarioNuevo = await Usuario.create(body)
            resultado = 1
        } catch (error) {
            throw error
        } finally {
            conx.desconectar()
        }
        return resultado

    }

    // Funcion solo utilizada en los middleware
    getUsuario = async (id) => {
        conx.conectar()

        let resultado = await Usuario.findByPk(id)
        conx.desconectar()
        if (!resultado) {
            conx.desconectar()
            resultado = null
        }
        return resultado;
    }


    getUsuarioEmail = async (email) => {
        let resultado = 0
        conx.conectar()
        try {
            resultado = await Usuario.findOne({
                where: {
                    email: email
                }
            })
            if (!resultado) {
                resultado = null;
            }
            conx.desconectar()
        } catch (error) {
            resultado = null
            conx.desconectar()
        }
        return resultado
    }

    deleteUsuario = async (id) => {
        conx.conectar()
        let resultado = await Usuario.findByPk(id)
        conx.desconectar()
        if (!resultado) {
            conx.desconectar()
            throw error
        }
        await resultado.destroy()
        conx.desconectar()
        return resultados
    }


    updateUsuario = async (body, id) => {
        conx.conectar()
        let resultado = await Usuario.findByPk(id)
        if (!resultado) {
            conx.desconectar()
            throw error
        }
        try {
            await resultado.update(body)
        }catch (error) {
            conx.desconectar()
            throw error
        }
        conx.desconectar()
        return resultado
    }

    getUsuarios = async () => {
        conx.conectar()

        let resultado = await Usuario.findAll()
        conx.desconectar()
        if (!resultado) {
            conx.desconectar()
            resultado = null
        }
        return resultado;
    }

    checkLogin = async () => {
        return 0
    }

}

module.exports = ConexionUsuario