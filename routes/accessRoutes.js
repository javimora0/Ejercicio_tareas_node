const { Router } = require('express');
const { check } = require('express-validator');
const controlador = require('../controllers/userController');
const mids = require('../middlewares/middleware');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router()


router.post('/registro',
    [
        check('nombre', 'El nombre debe tener entre 3 y 60 caracteres')
            .isLength({ min: 3, max: 60 }),
        check('email', 'Email incorrecto')
            .isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caracteres')
            .isLength({ min: 6 }),
        validarCampos], mids.checkEmail, controlador.crearUsuario);
        
router.post('/login', mids.checkCredentials, controlador.login)



module.exports = router
