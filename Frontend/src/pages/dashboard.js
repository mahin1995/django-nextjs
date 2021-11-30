import Layout from "../hocs/Layout";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Dashboard=()=>{
    const router=useRouter()
    const isAuthenticated= useSelector(state => state.auth.isAuthenticated)
    const user= useSelector(state => state.auth.user)
    const loading= useSelector(state => state.auth.loading)
    if(typeof window !=='undefind' &&!loading &&!isAuthenticated){
        router.push("/login")
    }
   return(
    <Layout
    title="Http only auth | Dashboard"
    content="Dashboard page for httponly"
    >

        <div className="p-5 bg-light rounded-3">
            <div className="container-fluid">
                <h1 className="display-5 fw-bold">
                    userDashboard
                </h1>
                <p className="fs-4 mt3"> 
                Hello {user!=null &&user.first_name}
                    welcome to the httpOnly auth site
                </p>
            </div>
        </div>
    </Layout>
   )
}

export default Dashboard