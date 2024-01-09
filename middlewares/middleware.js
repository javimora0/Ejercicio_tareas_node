const checkDatos = (req, res, next) => { 
    const body = req.body
    if (body.dificultad !== 'XS' && body.dificultad !== 'S' && body.dificultad !== 'M' && body.dificultad !== 'L' && body.dificultad !== 'XL') {
        res.status(404).json({'message': 'Dificultad no valida'})
    }else {
        next()
    }
}

module.exports = {
    checkDatos
}