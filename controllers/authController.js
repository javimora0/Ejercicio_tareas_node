const { response } = require('express')
const Conexion = require("../database/ConexionUsuario");
const {generarJWT} = require("../helpers/generarJWT");

const login = ( req, res = response) => {
    const {email, password} = req.body
    try {
        const conx = new Conexion()
        u = conx.getUsuarioRegistrado(email, password)
            .then( usuario => {
                const token = generarJWT(usuario.email)
                res.status(200).json({'usuario': usuario,'token' :token})
            })
            .catch(err => {
                res.status(500).json({'msg': 'Login incorrecto'})
            })
    }catch (error) {
        res.status(500).json({'msg':'Error en el servidor.'});
    }
}
module.exports = {
    login
}