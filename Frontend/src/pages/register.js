import { useState } from "react";
import Layout from "../hocs/Layout";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import { register_action } from "../action/auth";
import { useRouter } from "next/router";


const RegisterPage = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const register_success = useSelector((state) => state.auth.register_success);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const loading = useSelector((state) => state.auth.loading);
  const [formData, setFormData] = useState({ 
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    re_password: "",
  });
  const { first_name, last_name, username, password, re_password } = formData;
  const onFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onFormSubmit = (e) => {
      console.log("click")
    e.preventDefault();
    if(dispatch && dispatch !== null && dispatch != undefined ){
        dispatch(register_action(    first_name,
            last_name,
            username,
            password,
            re_password))
    }
  };
  if (typeof window !== undefined && isAuthenticated) router.push("/dashboard");
  if ( register_success) router.push("/login");
  return (
    <Layout title="Http only auth | Register" content="Register Page">
      <h1 className="display-4 mt-5">Register Page</h1>

      <form className="bg-light p-5 mt-5 mb-5" onSubmit={onFormSubmit}>
        <h3>Create an account</h3>
        <div className="form-group">
          <label className="form-lebel mt-3" htmlFor="first_name">
            <strong>First Name</strong>
          </label>
          <input
            className="form-control"
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={onFormChange}
            value={first_name}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-lebel mt-3" htmlFor="last_name">
            <strong>Last Name</strong>
          </label>
          <input
            className="form-control"
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={onFormChange}
            value={last_name}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-lebel mt-3" htmlFor="username">
            <strong>Username</strong>
          </label>
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            onChange={onFormChange}
            value={username}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-lebel mt-3" htmlFor="password">
            <strong>password</strong>
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="password"
            onChange={onFormChange}
            value={password}
            minLength="8"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-lebel mt-3" htmlFor="re_password">
            <strong>Confirm password</strong>
          </label>
          <input
            className="form-control"
            type="password"
            name="re_password"
            placeholder="Confrim password"
            onChange={onFormChange}
            value={re_password}
            minLength="8"
            required
          />
        </div>
        {loading?(
            <div className="d-flex justify-conten-center align-items-center mt-5">
                <Loader type="Oval"
                color="#00bfff"
                width={50}
                height={50}
                ></Loader>
            </div>
        ): <button className="btn btn-primary mt-3"> Create account </button>}
        
      </form>
    </Layout>
  );
};

export default RegisterPage;
