// Navbar.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("admin"));

  function logout() {
    localStorage.removeItem("admin");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">

        {/* LOGO */}
        <Link className="navbar-brand logo-text" to="/">
          ShopEase
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVBAR LINKS */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                Home
              </Link>
            </li>

            {!user ? (
              <>
              
                <li className="nav-item">
                  <Link className="nav-link custom-link" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link custom-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
              <li className="nav-item">
              <Link className="nav-link custom-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
                <li className="nav-item">
                  <Link className="nav-link custom-link" to="/products">
                    Products
                  </Link>
                </li>

                

                {/* ADMIN DROPDOWN */}
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle custom-link"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ cursor: "pointer" }}
                  >
                    Admin
                  </span>

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/add-product">
                        Add Product
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/admin-products">
                        Admin Products
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <button className="logout-btn" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;