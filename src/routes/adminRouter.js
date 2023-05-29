const { Router } = require("express");
const { getAdminProfileById } = require("../api/controllers/adminController");
getAdminProfileById
const adminRouter = Router()
adminRouter.get('/getAdminProfile',getAdminProfileById)

module.exports.adminRouter = adminRouter