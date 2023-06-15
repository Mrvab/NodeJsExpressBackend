module.exports.messages = Object.freeze({
  GLOBAL_CRASH: 'Something Went Wrong',
  SUCCESS: {
    SIGN_IN: 'signed in successfully',
    SIGN_UP: 'signed up Successfully',
    USER_PROFILE: 'user profile found successfully',
    DELETE_USER: 'user has been deleted',
    UPDATE_PROFILE: 'user profile updated successfully'
  },
  ERRORS: {
    SIGN_IN: 'Authentication failed at sign in',
    AUTH_TOKEN: 'Authentication failed',
    USER_PROFILE: 'user not found!!',
    UPDATE_PROFILE: 'unable to update user profile',
    DELETE_USER: 'enable to delete user'
  },
  ERROR_DESC: {
    SIGN_IN: 'email or password is wrong',
    AUTH_TOKEN: 'missing Authentication Token in header',
    INVALID_TOKEN: 'invalid or expired auth token',
    USER_PROFILE: 'selected user does not exists',
    DELETE_USER: 'user does not exist or already deleted'
  }
})
