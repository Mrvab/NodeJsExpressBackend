const { queryExecutionService } = require("../commonServices/dbServices");

module.exports.getAllUserProfile = () => {
    const adminId = 1
    return queryExecutionService('select * from users where id != ?',[adminId])
};
