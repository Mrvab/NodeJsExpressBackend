const { responseHandler } = require("../../utility/responseHandler");
const { getAllUserProfile } = require("../services/adminServices/getAllUsersProfile");
const { getUserProfile } = require("../services/commonServices/userServices");

module.exports.getAdminProfileById = async (req, res) => {
  try {
    let { id } = req.body,
      message = "Admin profile found!!";
    const userProfile = await getUserProfile(id);
    return responseHandler(res, 200, message, userProfile[0], {});
  } catch (error) {
    console.log(error);
    let message = "something went wrong";
    return responseHandler(res, 500, message, {}, message);
  }
};
module.exports.getAllUserProfile = async (req, res) => {
  try {
   const userProfiles = await getAllUserProfile()
   let message = 'users fetched successfully'
   return responseHandler(res,200,message,userProfiles,{})
  } catch (error) {
    console.log(error);
    let message = "something went wrong";
    return responseHandler(res, 500, message, {}, message);
  }
};
module.exports.updateUserProfile = async (req, res) => {
  try {
    let { id, name, email, city, state } = req.body,
      message = "User Profile Updated!!";
      const userProfiles = await getAllUserProfile()
    return responseHandler(res, 200, message, userProfiles, {});
  } catch (error) {
    console.log(error);
    let message = "something went wrong";
    return responseHandler(res, 500, message, {}, message);
  }
};
