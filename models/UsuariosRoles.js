const {DataTypes} = require('sequelize')
const {usuario} = require('../models/Usuario')
const {rol} = require('../models/Rol')
const Conexion = require('../database/Conexion')

const conx = new Conexion()
const UsuarioRol = conx.db.define('usuario_role', {
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
        id_rol: {
            type: DataTypes.BIGINT,
            references: {
                model: rol,
                key: 'id'
            }
        }
    },
    {
        timestamps: false,
        tableName: 'usuarios_roles'
    }
)
module.exports = UsuarioRol