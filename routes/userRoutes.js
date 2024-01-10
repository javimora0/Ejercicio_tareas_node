const {check} = require('express-validator')
const { Router } = require('express');
const controlador = require('../controllers/userController');
const router = Router()
const { validarCampos } = require('../middlewares/validar-campos')
const mids = require('../middlewares/middleware')

router.delete('/:id', mids.checkId, controlador.borrarUsuario)
router.put([
    ,validarCampos
], controlador.modificarUsuario)

router.route('/user')
    .get(controlador.todosUsuarios)
    
    .post([
        ,validarCampos
    ], controlador.crearUsuario)