// login controller

const { messages } = require('../../config/messages')
const { responseHandler } = require('../../utility/responseHandler')
const { createJsonWebToken } = require('../middlewares/middleware')
const { signInService } = require('../services/commonServices/nonJWTService')

module.exports.signInController = async (req, res) => {
  try {
    const { email, password } = req.body
    const signInResponse = await signInService(email, password)
    // TODO : create jwt token and attach to response body here
    if (signInResponse[0].loginStatus === 'SUCCESS') {
      const token = await createJsonWebToken(req.body)
      signInResponse[0].token = token
      return responseHandler(
        res,
        200,
        messages.SUCCESS.SIGN_IN,
        signInResponse[0],
        {}
      )
    } else {
      return responseHandler(
        res,
        400,
        messages.ERRORS.SIGN_IN,
        {},
        messages.ERROR_DESC.SIGN_IN
      )
    }
  } catch (error) {
    console.error(error)
    return responseHandler(res, 500, messages.GLOBAL_CRASH)
  }
}
