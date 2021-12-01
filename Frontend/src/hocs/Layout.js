import Navbar from "../components/Navbar";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { check_auth_status } from "../action/auth";
const Layout=({title,content,children})=>{
    const dispatch = useDispatch()
    useEffect(() => {
        if(dispatch&&dispatch!==null&&dispatch!==undefined){
            dispatch(check_auth_status())
        }
    }, [dispatch])
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={content} />
        </Head>
        <Navbar/>
        <div className="container mt-5">
            {children}
        </div>
        </>
    )
};


Layout.defaultProps={
    title:'httpOnly Auth',
    content:'Tutorial for showing you how to use httpOnly cookies for storing json web tokens'
}
export default Layout;