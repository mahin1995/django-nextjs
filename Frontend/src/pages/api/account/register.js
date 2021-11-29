// import {API_URL} from '../../../config/index'


export default  async (req,res)=>{
    const API_URL="http://localhost:8000"
    if(req.method=="POST"){
        const {
            first_name,
            last_name,
            username,
            password,
            re_password
        }=req.body;
        const body =JSON.stringify({
            first_name,
            last_name,
            username,
            password,
            re_password
        })
        try{
            const apiRes=await fetch(`${API_URL}/api/account/register`,{
                method:'POST',
                headers:{
                    'ACCEPT':'application/json',
                    'Content-Type':'application/json'
                },
                body:body
            })
            const data =await apiRes.json();
            console.log(data)
            if(apiRes.status===2001){
                return res.status(201).json({success:data.success})
            }else{
                 return res.status(apiRes.status).json({
                     error:data.error
                 })
            }
        }
        catch(err){
            return res.status(500).json({
                "error":"Something went wrong when registering for an account"
            })
        }
    }else{
        res.setHeader('Allow',['POST']);
        return res.status(405).json({'error':`Method ${req.method} not allowed`})
    }
}