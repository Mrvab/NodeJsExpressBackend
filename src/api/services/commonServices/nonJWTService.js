const { storedProcedure } = require("../../../config/dbQueries").dbQueries
const { queryExecutionService } = require("./dbServices")

module.exports.signInService = async (email,password)=>{
    const loginResponse = await queryExecutionService(storedProcedure.loginUser,[email,password])
    return loginResponse
}

module.exports.signUpService = async(name,email,password,role,city,state)=>{
    const signUpResponse = await queryExecutionService(storedProcedure.createUserProfile,[name,email,password,role,city,state])
    return signUpResponse
}