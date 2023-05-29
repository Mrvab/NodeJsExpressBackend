module.exports.responseHandler = (response,statusCode,message,data,error)=>{
    return response.status(statusCode).send({
        message:message,
        data:data || {},
        error : error || {}
    })

}