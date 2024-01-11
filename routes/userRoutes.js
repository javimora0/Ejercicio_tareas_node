const { Router } = require('express');
const { check } = require('express-validator');
const controlador = require('../controllers/userController');
const { validarCampos } = require('../middlewares/validar-campos');
const mids = require('../middlewares/middleware');

const router = Router()


router.post('/user',
    [
        check('nombre', 'El nombre debe tener entre 3 y 60 caracteres')
            .isLength({ min: 3, max: 60 }),
        check('email', 'Email incorrecto')
            .isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caracteres')
            .isLength({ min: 6 }), validarCampos], controlador.crearUsuario)

router.get('/user/:id', controlador.obtenerUsuario)

router.get('/user', controlador.obtenerUsuarios)

router.delete('/user/:id', mids.checkId, controlador.borrarUsuario)

router.put('/user',
    [
        check('nombre', 'El nombre debe tener entre 3 y 60 caracteres')
            .isLength({ min: 3, max: 60 }),
        check('email', 'Email incorrecto')
            .isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caracteres')
            .isLength({ min: 6 }),
        validarCampos], mids.checkEmail, controlador.modificarUsuario)


module.exports = router
