import cookie from 'cookie'
import {APP_URL} from '../../../config/index'


export default async (req,res)=>{
    if(req.method==='GET'){
        const cookies=cookie.parse(req.headers.cookie??'')
        const access=cookies.access??false;
        console.log("access",access)
        if(access==false){
            return res.status(404).json({
                error:"User unauthorize to make this request"
            })
        }
        try{
            const apiRes=await fetch(`http://127.0.0.1:8000/api/account/userView`,{
                method:"GET",
                headers:{
                    "Accept":'application/json',
                    "Authorization":`Bearer ${access}`
                }
            })
            console.log(apiRes.status)
            const data =apiRes.json()
            console.log(data)
            if(apiRes.status===200){
                return res.status(200).json({
                    user:data.user
                })
            }else{
                return res.status(apiRes.status).json({
                    error:data.error
                })
            }
        }catch(err){
            console.log(err)
            return res.status(500).json({
                error:"Something went wrong in retriving user"
            })
        }
     
    }else{
        res.setHeader('Allow',['GET']);
        return res.status(405).json({
            error:`Method ${req.method} not allowed`
        })
    }
}