const { messages } = require('../../../config/messages')
const { responseHandler } = require('../../../utility/responseHandler')

module.exports.responseCallerService = (statusResponse, responseObj, messageToAttach, dataToAttach) => {
  if (statusResponse === 'SUCCESS') {
    return responseHandler(responseObj, 200, messages.SUCCESS[messageToAttach], dataToAttach, {})
  } else {
    return responseHandler(responseObj, 400, messages.ERRORS[messageToAttach], {}, messages.ERROR_DESC[messageToAttach])
  }
}
