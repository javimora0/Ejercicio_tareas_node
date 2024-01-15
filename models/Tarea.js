const {DataTypes} = require('sequelize')
const {Conexion} = require('../database/Conexion')

const conx = new Conexion()
const Tarea = conx.db.define('tarea', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            alowNull: false,
            unique: true
        },
        duracion: {
            type: DataTypes.INTEGER
        },
        dificultad: {
            type: DataTypes.STRING
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