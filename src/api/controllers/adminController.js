const { messages } = require('../../config/messages')
const { responseHandler } = require('../../utility/responseHandler')
const { getAllUserProfile } = require('../services/adminServices/getAllUsersProfile')
const { getUserProfile } = require('../services/commonServices/userServices')

module.exports.getAdminProfileById = async (req, res) => {
  try {
    const { id } = req.body
    const userProfile = await getUserProfile(id)
    return responseHandler(res, 200, messages.SUCCESS.USER_PROFILE, userProfile[0], {})
  } catch (error) {
    console.log(error)
    return responseHandler(res, 500, messages.GLOBAL_CRASH, {}, messages.GLOBAL_CRASH)
  }
}
module.exports.getAllUserProfile = async (req, res) => {
  try {
    const userProfiles = await getAllUserProfile()
    const message = 'users fetched successfully'
    return responseHandler(res, 200, message, userProfiles, {})
  } catch (error) {
    console.log(error)
    const message = 'something went wrong'
    return responseHandler(res, 500, message, {}, message)
  }
}
module.exports.updateUserProfile = async (req, res) => {
  // try {
  //   const { id, name, email, city, state } = req.body
  //   const message = 'User Profile Updated!!'
  //   const userProfiles = await getAllUserProfile()
  //   return responseHandler(res, 200, message, userProfiles, {})
  // } catch (error) {
  //   console.log(error)
  //   const message = 'something went wrong'
  //   return responseHandler(res, 500, message, {}, message)
  // }
}
