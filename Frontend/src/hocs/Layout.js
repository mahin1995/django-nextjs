import Navbar from "../components/Navbar";
import Head from "next/head";

const Layout=({title,content,children})=>(
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
);
export default Layout;