const { Router, request } = require("express");
const { userRouter } = require("./userRouter");
const { adminRouter } = require("./adminRouter");
// const { routerPath } = require("../config/routerConfig");
const { nonJwtRouter } = require("./nonJWTRouter");
const { verifyJsonWebToken } = require("../api/middlewares/jwtMiddleware");

const mainRouter = Router();
// console.log(request.path);
mainRouter.use("/user",verifyJsonWebToken,userRouter);
mainRouter.use('/admin',verifyJsonWebToken,adminRouter)
mainRouter.use('/',nonJwtRouter)

mainRouter.get("/", (req, res) => {
  res.status(200).send({
    message: "server is online",
  });
});

module.exports.mainRouter = mainRouter