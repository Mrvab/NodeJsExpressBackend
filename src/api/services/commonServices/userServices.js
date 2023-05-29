const { storedProcedure } = require("../../../config/dbQueries").dbQueries;
const { queryExecutionService } = require("./dbServices");

module.exports.getUserProfile = async (id) => {
 return queryExecutionService(
    storedProcedure.getUserProfile,
    [id]
  );
//   return userProfile;
};

module.exports.updateUserProfile = async (id, name, email, city, state) => {
  return queryExecutionService(
    storedProcedure.updateUser,
    [id, name, email, city, state]
  );
//   return updateProfileResponse;
};

module.exports.deleteUserProfile = async (id) => {
  return queryExecutionService(
    storedProcedure.deleteUserProfile,
    [id]
  );
//   return deleteProfileResponse;
};

