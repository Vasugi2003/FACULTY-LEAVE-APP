import React, { useContext, useEffect, useState } from "react";
import LeaveContext from "../../context/LeaveContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "./jgi.png";
import "react-toastify/dist/ReactToastify.css";
function LoginMain() {
  const userContext = useContext(LeaveContext);
  const navigate = useNavigate();
  const { login } = userContext;
  const [user, setUser] = useState({});

  const [formErrors, setFormErrors] = useState({});
  useEffect(() => {
    localStorage.removeItem("storedUser");
    const reloadCount = sessionStorage.getItem("reloadCount");
    if (reloadCount < 1) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
  }, []);

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    if (user.email && user.password) {
      const res = await login(user);

      if (res) {
        const localUserDetails = JSON.parse(localStorage.getItem("storedUser"));
        if (localUserDetails?.success) {
          const userDets = localUserDetails?.user;
          if (
            userDets?.role === "Staff" ||
            userDets?.role === "Hod" ||
            userDets?.role === "Principal"
          ) {
            navigate("/");
          } else if (userDets?.role === "Admin") {
            navigate("/admin");
          }
        } else if (user.email && user.password) {
          toast.error(res.msg);
        }
      } else {
        toast.error("internal server error");
      }
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="vertical-center">
      <img className="logo" src={logo} alt="" />
      <div className=" loginContainer">
        <form className="requires-validation" onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address <span className="text-danger"> *</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={handleOnChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <p className="text-danger">{formErrors.email}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password <span className="text-danger"> *</span>
            </label>
            <input
              type="password"
              name="password"
              onChange={handleOnChange}
              className="form-control"
              id="exampleInputPassword1"
            />
            <p className="text-danger">{formErrors.password}</p>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginMain;
