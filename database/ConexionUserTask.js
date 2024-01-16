const Conexion = require('../database/Conexion');
const userTask = require('../models/UsuariosTareas')
const conx = new Conexion();

class ConexionUserTask {
    asignarTarea = async(idUsuario, idTarea) => {
        let resultado = 0
        conx.conectar()
        try {
            resultado = await userTask.create({id_usuario: idUsuario, id_tarea:idTarea})
        } catch (error) {
            throw error
        }finally {
            conx.desconectar()
        }
        return resultado
    }

    getAsignacion = async(idUsuario, idTarea) => { 
        let resultado = 0
        conx.conectar()
        try{
            resultado = await userTask.findOne({
                where: {
                    id_usuario: idUsuario,
                    id_tarea: idTarea
                }
            })
            if (!resultado) {
                resultado = null
            }
        }catch(error) {
            conx.desconectar()
            throw error
        }
        conx.desconectar()
        return resultado
    }
}

module.exports = ConexionUserTask