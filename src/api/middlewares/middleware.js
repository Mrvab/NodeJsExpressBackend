const jwt = require('jsonwebtoken')
const { responseHandler } = require('../../utility/responseHandler')
const { messages } = require('../../config/messages')
const jwtSecretKey = process.env.JWT_SK
const options = { algorithm: 'RS256', expiresIn: '1d' }

module.exports.createJsonWebToken = async (data) => {
  const signedToken = jwt.sign(data, jwtSecretKey, options)
  return signedToken
}
module.exports.verifyJsonWebToken = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization
    if (!token) {
      return responseHandler(res, 400, messages.ERRORS.AUTH_TOKEN, {}, messages.ERROR_DESC.AUTH_TOKEN)
    }

    jwt.verify(token.split(' ')[1], jwtSecretKey, options, (err, data) => {
      if (err) {
        return responseHandler(res, 400, messages.ERRORS.AUTH_TOKEN, {}, messages.ERROR_DESC.INVALID_TOKEN)
      } else {
        console.log(data)
        req.decode = data
        next()
      }
    })
  } catch (error) {
    console.log('jwt verify => ', error)
    return responseHandler(res, 500, messages.GLOBAL_CRASH, {}, {})
  }
}
