import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg border-bottom shadow-sm"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)"
      }}
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand text-dark fw-bold d-flex align-items-center"
          to="/"
        >
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.MTzytHORJnUQ3GxQN_u-8AHaHa?pid=Api&P=0&h=180"
            alt="FlickVerse Logo"
            width="50"
            height="50"
            className="me-2 rounded-circle border border-secondary"
          />
          <span className="brand-text">FlickVerse</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          style={{ borderColor: "rgba(0,0,0,0.1)" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-1">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded ${
                    isActive 
                      ? "text-white fw-bold active-nav" 
                      : "text-dark hover-nav"
                  }`
                }
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded ${
                    isActive 
                      ? "text-white fw-bold active-nav" 
                      : "text-dark hover-nav"
                  }`
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movie"
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded ${
                    isActive 
                      ? "text-white fw-bold active-nav" 
                      : "text-dark hover-nav"
                  }`
                }
              >
                MOVIES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded ${
                    isActive 
                      ? "text-white fw-bold active-nav" 
                      : "text-dark hover-nav"
                  }`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <style>
        {`
          .brand-text {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
          }
          
          .active-nav {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            box-shadow: 0 4px 6px rgba(118, 75, 162, 0.2);
          }
          
          .hover-nav:hover {
            background: rgba(102, 126, 234, 0.1);
            transform: translateY(-2px);
            transition: all 0.3s ease;
          }
          
          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
          }
        `}
      </style>
    </nav>
  );
};

export default Header;