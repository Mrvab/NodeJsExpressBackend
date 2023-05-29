const { responseHandler } = require("../../utility/responseHandler");

const {
    getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} = require("../services/commonServices/userServices");

module.exports.getUserProfileById = async (req, res) => {
  try {
    let { id } = req.body,
      message = "user profile found!!";
    const userProfile = await getUserProfile(id);
    return responseHandler(res, 200, message, userProfile[0], {});
  } catch (error) {
    console.log(error);
    let message = "something went wrong";
    return responseHandler(res, 500, message, {}, message);
  }
};

module.exports.updateUserProfile = (req, res) => {
  try {
    let message = "user profile updated successfully";
    const { id, name, email, city, state } = req.body;
    const updateProfileResponse = updateUserProfile(
      id,
      name,
      email,
      city,
      state
    );
    return responseHandler(res, 200, message, updateProfileResponse, {});
  } catch (error) {
    console.log("updateUserProfile : ", error);
    return responseHandler(
      res,
      500,
      "something went wrong",
      {},
      "something went wrong"
    );
  }
};

module.exports.deleteUserProfile = async (req,res)=>{
    try {
        const {id} = req.body
        const deleteUserResponse = await deleteUserProfile(id)
        return responseHandler(res,200,'user has been deleted',deleteUserResponse,{})
        
    } catch (error) {
        console.log("deleteUserProfile : ", error);
        return responseHandler(
          res,
          500,
          "something went wrong",
          {},
          "something went wrong"
        );
    }
}
