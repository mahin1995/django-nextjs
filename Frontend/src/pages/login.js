import { useState } from "react";
import Layout from "../hocs/Layout";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import { useRouter } from "next/router";
import { register_action } from "../action/auth";

const LogirPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const onFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onFormSubmit = (e) => {
    console.log("click");
    e.preventDefault();
    // if (dispatch && dispatch !== null && dispatch != undefined) {
    //   dispatch(register_action(username, password));
    // }
  };

  if(typeof window !==undefined&&isAuthenticated)
            router.push('/dashboard')
  return (
    <Layout title="Http only auth | Register" content="Register Page">
      <h1 className="display-4 mt-5">Login Page</h1>

      <form className="bg-light p-5 mt-5 mb-5" onSubmit={onFormSubmit}>
        <h3>Log into your account</h3>

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

        <button className="btn btn-primary mt-3"> Login </button>
      </form>
    </Layout>
  );
};

export default LogirPage;
