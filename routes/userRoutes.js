const { Router } = require('express');
const { check } = require('express-validator');
const controlador = require('../controllers/userController');
const router = Router()

router.post('/user', controlador.crearUsuario)
router.get('/user:id', controlador.obtenerUsuario)
router.get('/user', controlador.obtenerUsuarios)
router.delete('/user/:id', mids.checkId, controlador.borrarUsuario)


// router.put([
//     ,validarCampos
// ], controlador.modificarUsuario)

// router.route('/user')
//     .get(controlador.todosUsuarios)
    
//     .post([
//         ,validarCampos
//     ], controlador.crearUsuario)
