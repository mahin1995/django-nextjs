import { REGISTER_FAIL, REGISTER_SUCCESS, REMOVE_AUTH_LOADING, SET_AUTH_LOADING,RESET_REGISTER_SUCCESS,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_FAIL,LOGOUT_SUCCESS,LOAD_USER_SUCCESS,LOAD_USER_FAIL,AUTHENTICATE_SUCCESS,AUTHENTICATE_FAIL } from "../action/type";

const initialState ={
    user:null,
    isAuthenticated:false,
    loading:false,
    register_success:false
}

const authReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch (type) {
        case REGISTER_SUCCESS:
            return{
                ...state,
                register_success:true
            }
        case REGISTER_FAIL:
            return{
                ...state,
            }
        case RESET_REGISTER_SUCCESS:
            return{
                ...state,
                register_success:false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated:true
            }
        case LOGIN_FAIL:
            return{
                ...state,
                isAuthenticated:false
            }
        case LOGOUT_SUCCESS:
            return{
                ...state,
                isAuthenticated:false
            }
        case LOGOUT_FAIL:
            return{
                ...state
            }
        case LOAD_USER_SUCCESS:
            return{
                ...state,
                user:payload.user
            }
        case LOAD_USER_FAIL:
            return{
                ...state,
                user:null
            }
        case SET_AUTH_LOADING:
            return{
                ...state,
                loading:true
            }
        case REMOVE_AUTH_LOADING:
            return{
                ...state,
                loading:false
            }
        case AUTHENTICATE_SUCCESS:
            return {
                ...state,
                isAuthenticated:true
            }
        case AUTHENTICATE_FAIL:
            return {
                ...state,
                isAuthenticated:false,
                user:null
            }

        default:
            return state;
    }
}
export default authReducer