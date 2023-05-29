const { Router } = require("express");
const { signInController } = require("../api/controllers/signinController");
const { signUpController } = require("../api/controllers/signupController");

const nonJwtRouter = Router();
userRouter.get("/signIn", signInController);
userRouter.get("/signUp", signUpController);

module.exports.nonJwtRouter = nonJwtRouter;
