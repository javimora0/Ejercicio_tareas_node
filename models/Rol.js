const { DataTypes } = require('sequelize');
const Conexion = require('../database/Conexion');
const Usuario = require('./Usuario');
const conx = new Conexion();

const Rol = conx.db.define(
    'rol',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
        tableName: 'roles',
    }
);

Rol.belongsToMany(Usuario, {
    through: 'usuarios_roles',
    foreignKey: 'id_rol',
});

module.exports = Rol;
