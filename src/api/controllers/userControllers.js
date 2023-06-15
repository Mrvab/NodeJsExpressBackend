const { messages } = require('../../config/messages')
const { responseHandler } = require('../../utility/responseHandler')
const { responseCallerService } = require('../services/commonServices/responseCallerService')

const {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile
} = require('../services/commonServices/userServices')

module.exports.getUserProfileById = async (req, res) => {
  try {
    const { id } = req.body
    const userProfile = await getUserProfile(id)
    return responseCallerService(userProfile[0].message, res, 'USER_PROFILE', userProfile[0])
  } catch (error) {
    console.error('get user profile => ', error)
    return responseHandler(res, 500, messages.GLOBAL_CRASH, {}, messages.GLOBAL_CRASH)
  }
}

module.exports.updateUserProfile = (req, res) => {
  try {
    const { id, name, email, city, state } = req.body
    const updateProfileResponse = updateUserProfile(id, name, email, city, state)
    return responseCallerService(updateProfileResponse[0].message, res, 'UPDATE_PROFILE', updateProfileResponse[0])
  } catch (error) {
    console.error('updateUserProfile : ', error)
    return responseHandler(res, 500, messages.GLOBAL_CRASH, {}, messages.GLOBAL_CRASH)
  }
}

module.exports.deleteUserProfile = async (req, res) => {
  try {
    const { id } = req.body
    const deleteUserResponse = await deleteUserProfile(id)
    return responseCallerService(deleteUserResponse[0].message, res, 'DELETE_USER', deleteUserResponse[0])
  } catch (error) {
    console.error('deleteUserProfile : ', error)
    return responseHandler(res, 500, messages.GLOBAL_CRASH, {}, messages.GLOBAL_CRASH)
  }
}
