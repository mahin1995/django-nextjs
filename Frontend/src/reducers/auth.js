import { REGISTER_FAIL, REGISTER_SUCCESS, REMOVE_AUTH_LOADING, SET_AUTH_LOADING } from "../action/type";

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
        default:
            return state;
    }
}
export default authReducer