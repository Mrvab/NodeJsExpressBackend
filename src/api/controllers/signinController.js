// login controller

const { messages } = require("../../config/messages");
const { responseHandler } = require("../../utility/responseHandler");
const { createJsonWebToken } = require("../middlewares/jwtMiddleware");
const { signIn } = require("../services/commonServices/nonJWTService");

module.exports.signInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const signInResponse = await signIn(email, password);
    // TODO : create jwt token and attach to response body here
    if (signInResponse[0].loginStatus === "SUCCESS") {
        const token = createJsonWebToken(req.body)
        signInResponse[0].token = token
      return responseHandler(
        res,
        200,
        messages.SUCCESS.SIGN_IN,
        signInResponse[0],
        {}
      );
    } else {
      return responseHandler(
        res,
        400,
        messages.ERRORS.SIGN_IN,
        {},
        messages.ERROR_DESC.SIGN_IN
      );
    }
  } catch (error) {
    console.log(error);
    return responseHandler(res, 500, messages.GLOBAL_CRASH);
  }
};
