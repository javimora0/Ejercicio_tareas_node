const { check } = require('express-validator');
const { Router } = require('express');
const controlador = require('../controllers/taskController');

const router = Router()
const { validarCampos } = require('../middlewares/validar-campos')
const mids = require('../middlewares/middleware')

router.delete('/:id', mids.checkId,controlador.borrarTarea)
router.put('/:id',
    [
        check('descripcion', 'Se requiere una descripción válida').exists().notEmpty(),
        check('dificultad', 'Debe introducir una dificultad válida').isIn(['XS', 'S', 'M', 'L', 'XL']),
        check('duracion', 'La duración debe ser minimo 1 y máximo 15').isInt({ min: 1, max: 15 }),
        check('realizada', 'Realizada debe ser 1 o 0').isInt({ min: 0, max: 1 }),
        validarCampos
    ], controlador.actualizarTarea)

router.route('/task')
    .post(
        [
            check('descripcion', 'Se requiere una descripción válida').notEmpty(),
            check('dificultad', 'Debe introducir una dificultad válida').isIn(["XS", "S", "M", "L", "XL"]),
            check('duracion', 'La duración debe ser minimo 1 y máximo 15').isInt({ min: 1, max: 15 }),
            check('realizada', 'Realizada debe ser 1 o 0').isInt({ min: 0, max: 1 }),
            validarCampos
        ], controlador.crearTarea)
    .get(controlador.obtenerTodasLasTareas)

module.exports = router


