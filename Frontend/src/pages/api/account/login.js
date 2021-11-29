import cookie from 'cookie'
import {API_URL} from '../../../config/index'

export default async (req,res)=>{
    if(req.method==='POST'){
            const {ussername,password}=req.body;
            const body =JSON.stringify({ussername,password})
            try{
                    const  apiRes=await fetch(`${API_URL}/api/gettoken/`,{
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        },
                        body:body 
                    })
                    const data=await apiRes.json();
                    if(apiRes.status===200){
                            res.setHeader('Set-Cookie',[
                                cookie.serialize(
                                    'access',data.access,{
                                        httpOnly:true,
                                        secure:process.env.NODE_ENV!=='development',
                                        maxAge:60*30,
                                        sameSite:'strict',
                                        path:'/api/'
                                    }
                                )
                            ])
                            res.setHeader('Set-Cookie',[
                                cookie.serialize(
                                    'refresh',data.refresh,{
                                        httpOnly:true,
                                        secure:process.env.NODE_ENV!=='development',
                                        maxAge:60*60*24,
                                        sameSite:'strict',
                                        path:'/api/'
                                    }
                                )
                            ])
                            return res.status(200).json({
                                success:'Loged in sccessfully'
                            })
                    }else{
                        return res.status(apiRes.status).json({
                            error:data.error
                        })
                    }
            }
            catch(e){
                return res.status(apiRes.status).json({
                    error:"Something went wrong when authenticating"
                })
            }
    }else{
        res.setHeader('Allow',['POST'])
        return res.status(405).json({error:`Method ${req.method} not allowed`})
    }
}