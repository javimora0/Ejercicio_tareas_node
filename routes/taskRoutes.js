const { Router } = require('express');
const controlador = require('../controllers/taskController');
const router = Router()
const mids = require('../middlewares/middleware')


router.delete('/:id', controlador.borrarTarea)
router.put('/:id',mids.checkDatos, controlador.actualizarTarea)

router.route('/task')
    .post(mids.checkDatos, controlador.crearTarea)
    .get(controlador.obtenerTodasLasTareas)

module.exports = router


