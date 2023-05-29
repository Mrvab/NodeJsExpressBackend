const { Router } = require("express");
const { getUserProfileById } = require("../api/controllers/userControllers");

const userRouter = Router();
userRouter.get("/getUserProfile", getUserProfileById);

module.exports.userRouter = userRouter;
