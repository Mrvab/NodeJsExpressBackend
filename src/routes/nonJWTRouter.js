const { Router } = require('express')
const { signInController } = require('../api/controllers/signinController')
const { signUpController } = require('../api/controllers/signupController')

const nonJwtRouter = Router()
nonJwtRouter.get('/signIn', signInController)
nonJwtRouter.get('/signUp', signUpController)

module.exports.nonJwtRouter = nonJwtRouter
