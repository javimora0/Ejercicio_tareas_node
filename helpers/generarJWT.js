const jwt = require('jsonwebtoken')

const generarJWT = (uid = '') => {
    let token = jwt.sign({uid}, process.env.SECRETORPRIVATEKEY, {
        expiresIn: '4h'
    })
    return token
}

module.exports = {
    generarJWT
}