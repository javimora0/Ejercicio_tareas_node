const {DataTypes} = require('sequelize')
const {usuario} = require('../models/Usuario')
const {tarea} = require('../models/Tarea')
const Conexion = require('../database/Conexion')

const conx = new Conexion()
const UsuarioTarea = conx.db.define('usuarios_tareas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            alowNull: false,
            unique: true
        },
        id_usuario: {
            type: DataTypes.BIGINT,
            references: {
                model: usuario,
                key: 'id'
            }
        },
        id_tarea: {
            type: DataTypes.BIGINT,
            references: {
                model: tarea,
                key: 'id'
            }
        }
    }, {
        timestamps: false
    },
    {
        tableName: 'rolesasignados'
    });

module.exports = UsuarioTarea