const { queryExecutionService } = require("../commonServices/dbServices");

module.exports.getUserProfileService = async (id) => {
  const profileQuery = "select * from users where id = ?";
  const userProfile = await queryExecutionService(profileQuery, [id]);
  return userProfile;
};
