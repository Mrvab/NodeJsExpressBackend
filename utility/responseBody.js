module.exports.responseBody = (data,message, response) => {
    return {
        message: message || 'success', 
        response: response || true, 
        data: JSON.stringify(data) || JSON.stringify({})
    }
}