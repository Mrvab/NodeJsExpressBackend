const { messages } = require('../../config/messages')
const { responseHandler } = require('../../utility/responseHandler')
const { signUpService } = require('../services/commonServices/nonJWTService')

module.exports.signUpController = async (req, res) => {
  try {
    // add encryption and decryptions for data to be passed
    //  add a custom middleware for ADMIN creation
    const { name, email, password, role = 'USER', city, state } = req.body
    /* const signUpResponse = */ await signUpService(name, email, password, role, city, state)
    // for auto login attach signIn service and return response from here with attached token in response
    return responseHandler(res, 201, messages.SUCCESS.SIGN_UP, {}, {})
  } catch (error) {
    console.error('signup error => ', error)
    return responseHandler(res, 500, messages.GLOBAL_CRASH, {}, {})
  }
}
