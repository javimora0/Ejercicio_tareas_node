const {DataTypes} = require('sequelize')
const Conexion = require('../database/Conexion')

const conx = new Conexion()
const Usuario = conx.db.define('usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            alowNull: false,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    },
    {
        tableName: 'usuarios'
    }
)
module.exports = Usuario