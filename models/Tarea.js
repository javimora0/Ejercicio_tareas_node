const {DataTypes} = require('sequelize')
const  Conexion  = require('../database/Conexion')

const conx = new Conexion()
const Tarea = conx.db.define('tarea', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            alowNull: false,
            unique: true
        },
        descripcion: {
            type: DataTypes.STRING
        },
        dificultad: {
            type: DataTypes.STRING
        },
        duracion: {
            type: DataTypes.INTEGER
        },
        realizada: {
            type: DataTypes.INTEGER
        },
    },
    {
        timestamps: false
    },
    {
        tableName: 'tareas'
    }
)

module.exports = Tarea;