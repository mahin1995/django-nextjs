import {REGISTER_SUCCESS,REGISTER_FAIL,SET_AUTH_LOADING,REMOVE_AUTH_LOADING,LOGIN_FAIL,LOGIN_SUCCESS,RESET_REGISTER_SUCCESS,LOGOUT_FAIL, LOGOUT_SUCCESS,LOAD_USER_FAIL,LOAD_USER_SUCCESS,AUTHENTICATE_FAIL,AUTHENTICATE_SUCCESS} from './type'
export const register_action=(
    first_name,
    last_name,
    username,
    password,
    re_password
)=>async dispatch=>{
    const body=JSON.stringify({
        first_name,
        last_name,
        username,
        password,
        re_password
    })
    dispatch({
        type:SET_AUTH_LOADING
    })
    try{ 
        const res=await fetch('/api/account/register',{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:body
        })
        if(res.status===201){
            dispatch({
                type:REGISTER_SUCCESS
            })
        }else{
            dispatch({
                type:REGISTER_FAIL
            })
        }
    }catch(err){
        dispatch({
            type:REGISTER_FAIL
        })
    }
    dispatch({
        type:REMOVE_AUTH_LOADING
    })
}

export const reset_register_success=()=>dispatch=>{
    dispatch({
        type:RESET_REGISTER_SUCCESS
    })
}


export const login_action=(username,password)=>async dispatch=>{
    const body=JSON.stringify({
        username,password
    })
    dispatch({
        type:SET_AUTH_LOADING
    })
    try{
        const res=await fetch('/api/account/login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:body
        })
      
        if(res.status===200){
            dispatch({
                type:LOGIN_SUCCESS
            })
          dispatch(load_user())
        }
        else{
            dispatch({
                type:LOGIN_FAIL
            })
        }
    }
    catch(e){
        dispatch({
            type:LOGIN_FAIL
        })
    }
    dispatch({
        type:REMOVE_AUTH_LOADING
    })
}

export const logout_action=()=>async dispatch=>{
    try{
        const res =await fetch('/api/account/logout',{
            method:"POST",
            headers:{
                'Accept':'application/json'
            }
        });
        if(res.status===200){
            dispatch({
                type:LOGOUT_SUCCESS
            });
        }else{
            dispatch({
                type:LOGOUT_FAIL
            })
        }
    }
    catch(e){
        dispatch({
            type:LOGOUT_FAIL
        })
    }
}

export const load_user_action=()=>async dispatch=>{
    try{
        const res=await fetch('/api/account/user',{
            method:"GET",
            headers:{
                "Accept":'application/json'
            }
        })
        const data=await res.json()
        if(res.status===200){
            dispatch({
                type:LOAD_USER_SUCCESS,
                payload:data
            })
        }else{
            dispatch({
                type:LOAD_USER_FAIL
            })
        }
    }
    catch(err){
        console.log(err)
        dispatch({
            type:LOAD_USER_FAIL
        })
    }
}
export const check_auth_status=()=>async dispatch=>{
    try{
        const res=await fetch('/api/account/verify',{
            method:"GET",
            headers:{
                'Accept':'application/json'
            }
        })
        if(res.status===200){
            dispatch({
                type:AUTHENTICATE_SUCCESS
            })
            dispatch(load_user_action())
        }
        else{
            dispatch({
                type:AUTHENTICATE_FAIL
            })
        }
    }
    catch(err){
        dispatch({
            type:AUTHENTICATE_FAIL
        })
    }
}