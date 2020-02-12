const initState = {

}

const authReducer = (state = initState,action) => {

     switch(action.type){
        case 'LOGIN_ERROR':
            console.log("auth error");
            return {
                ...state,
                authError: 'Login Failed !',
                authSucced: null
            }
        case 'LOGIN_SUCCESS':
            console.log("auth succeed");
            return {
                ...state,
                authSucced:'Welcome !',
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log("Signout success");
            return state;
        case 'SIGNUP_SUCCESS':
            console.log("Signup success");
            return state;
        case 'SIGNUP_ERROR':
            console.log("Signup error");
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
     }
    
}

export default authReducer;