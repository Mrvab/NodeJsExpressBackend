module.exports.dbQueries = Object.freeze({
  storedProcedure: {
    getUserProfile: "call getUser(?)",
    createUserProfile: "call createUser(?,?,?,?,?,?)",
    deleteUserProfile: "call deleteUser(?)",
    loginUser: "call login(?,?)",
    logoutUser: "call logout(?)",
    getAllUser: "call getAllUser(?)",
    updateUser: 'call updateUser(?,?,?,?,?)'
  },
  rawQueries: {},
});
