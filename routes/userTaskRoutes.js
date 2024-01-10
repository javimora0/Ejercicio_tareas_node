const { Router } = require('express');
const { check } = require('express-validator');
const controlador = require('../controllers/userTaskController');
const mids = require('../middlewares/middleware')
const router = Router()

router.post('/assign/task/:idUsuario/:idTarea', mids.existeUsuario, mids.existeTarea, controlador.asignTarea)

module.exports = router
