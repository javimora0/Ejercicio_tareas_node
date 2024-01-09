const { Router } = require('express');
const controlador = require('../controllers/taskController');
const router = Router()
const mids = require('../middlewares/middleware')


router.route('/task')
    .post(mids.checkDatos, controlador.crearTarea)
    .get(controlador.obtenerTodasLasTareas)
    .delete('/:id', controlador.borrarTarea)
    .put('/:id',mids.checkDatos, controlador.actualizarTarea)
module.exports = router


