const { promisePool } = require("../../../utility/dbConnection")


module.exports.queryExecutionService = (query,params)=>{
    // returns a promise object for the service.
    return promisePool.query(query,params)
}