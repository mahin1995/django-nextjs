import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector,useDispatch } from "react-redux";
import { logout_action } from "../action/auth";
const navbar = () => {
   const dispatch = useDispatch()
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const router=useRouter()
    const logoutHandaler=()=>{
        if(dispatch && dispatch !==null && dispatch !==undefined){
          dispatch(logout_action())
          // window.location.reload();
        }
    }
    const authLink=(
      <>
      <li className="nav-item">
      <Link href="/">
        <a className={router.pathname==='/'?"nav-link active":"nav-link"} aria-current="page">
          Home
        </a>
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/dashboard">
        <a className="nav-link">Dashboard</a>
      </Link>
    </li>
    <li className="nav-item">
    
        <a className="nav-link"
        href='#!'
        onClick={logoutHandaler}
        >logout</a>
      
    </li>
      </>
    )
    const guestLink=(
<>
<li className="nav-item">
              <Link href="/">
                <a className={router.pathname==='/'?"nav-link active":"nav-link"} aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register">
                <a className="nav-link">register</a>
              </Link>
            </li>
</>
    )



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Navbar</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      


            {isAuthenticated?authLink:guestLink}
          </ul>
        
        </div>
      </div>
    </nav>
  );
};

export default navbar;
