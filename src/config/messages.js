module.exports.messages = Object.freeze({
    GLOBAL_CRASH:'Something Went Wrong',
    SUCCESS:{
        SIGN_IN:'signed in successfully',
        SIGN_UP:'signed up Successfully'
    },
    ERRORS:{
        SIGN_IN:'Authentication failed at sign in',
        AUTH_TOKEN:'Authentication failed'
    },
    ERROR_DESC:{
        SIGN_IN:'email or password is wrong',
        AUTH_TOKEN: 'missing Authentication Token in header',
        INVALID_TOKEN: 'invalid or expired auth token'
    }
})