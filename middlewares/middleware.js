const checkId = (req, res, next) => {
    const id = req.params.id
    if (isNaN(id) || id < 1) {
        res.status(404).json({ 'message': '' })
    } else {
        next()
    }
}

module.exports = {
    checkId
}