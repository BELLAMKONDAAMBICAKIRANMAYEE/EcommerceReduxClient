import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  // TOAST STATES
  const [showToast, setShowToast] = useState(false);

  const [toastMessage, setToastMessage] = useState("");

  const [toastType, setToastType] = useState("success");

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // SHOW TOAST FUNCTION

  function showBootstrapToast(message, type = "success") {

    setToastMessage(message);

    setToastType(type);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      const res = await axios.post(
        "https://ecomflask.duckdns.org/api/admin/login",
        formData,
        {
          withCredentials: true
        }
      );

      console.log(res.data);

      // SUCCESS TOAST
      showBootstrapToast(
        res.data.message || "Login Successful",
        "success"
      );

      // STORE ADMIN DATA
      localStorage.setItem(
        "admin",
        JSON.stringify(res.data.admin)
      );

      setTimeout(() => {
        navigate("/admin-products");
      }, 1500);

    } catch (error) {

      console.log(error.response?.data || error.message);

      // ERROR TOAST
      showBootstrapToast(
        "Login Failed",
        "danger"
      );
    }
  }

  return (
    <>
      {/* BOOTSTRAP 5 */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* CUSTOM STYLE */}
      <style>{`
        .login-page{
          min-height: 100vh;
          background: #f1f5f9;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }

        .login-card{
          width: 100%;
          max-width: 500px;
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .login-title{
          text-align: center;
          font-size: 38px;
          font-weight: bold;
          color: #0f172a;
          margin-bottom: 35px;
        }

        .form-label{
          font-weight: 600;
          color: #334155;
        }

        .form-control{
          border-radius: 10px;
          padding: 12px;
        }

        .login-btn{
          width: 100%;
          background: #0f172a;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 600;
          transition: 0.3s;
        }

        .login-btn:hover{
          background: #38bdf8;
        }

        .register-link{
          text-align: center;
          margin-top: 20px;
          color: #64748b;
        }

        .register-link a{
          color: #38bdf8;
          text-decoration: none;
          font-weight: 600;
        }

        .custom-toast{
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 9999;
          min-width: 320px;
          border-radius: 12px;
        }

        @media(max-width:768px){

          .login-card{
            padding: 25px;
          }

          .login-title{
            font-size: 30px;
          }

          .custom-toast{
            right: 10px;
            left: 10px;
            min-width: auto;
          }
        }
      `}</style>

      {/* TOAST */}

      {
        showToast && (
          <div
            className={`toast show align-items-center text-white bg-${toastType} border-0 custom-toast`}
            role="alert"
          >
            <div className="d-flex">

              <div className="toast-body">
                {toastMessage}
              </div>

              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setShowToast(false)}
              ></button>

            </div>
          </div>
        )
      }

      <div className="login-page">

        <div className="login-card">

          <h1 className="login-title">
            Admin Login
          </h1>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">

              <label className="form-label">
                Email Address
              </label>

              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

            <div className="mb-4">

              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />

            </div>

            <button
              type="submit"
              className="login-btn"
            >
              Login
            </button>

          </form>

          <div className="register-link">
            Don’t have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </div>

        </div>

      </div>
    </>
  );
}

export default Login;