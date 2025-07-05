import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="border-top pt-4 pb-3 mt-5"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand / Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold brand-text">FlickVerse</h5>
            <p className="small text-muted">
              Discover movies, actors, and timeless entertainment with
              FlickVerse.
            </p>
            <p className="small text-muted">Maharashtra</p>
            <p className="small">
              Email:{" "}
              <a
                href="mailto:support@flickverse.com"
                className="text-decoration-none hover-link"
                style={{ color: "#667eea" }}
              >
                support@flickverse.com
              </a>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Explore</h6>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <NavLink
                  to="/"
                  className="text-decoration-none hover-link"
                  style={{ color: "#4a5568" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/about"
                  className="text-decoration-none hover-link"
                  style={{ color: "#4a5568" }}
                >
                  About
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/movie"
                  className="text-decoration-none hover-link"
                  style={{ color: "#4a5568" }}
                >
                  Movies
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/contact"
                  className="text-decoration-none hover-link"
                  style={{ color: "#4a5568" }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support / Legal */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Support</h6>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none hover-link"
                  style={{ color: "#4a5568" }}
                >
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none hover-link"
                  style={{ color: "#4a5568" }}
                >
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none hover-link"
                  style={{ color: "#4a5568" }}
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none hover-link"
                  style={{ color: "#4a5568" }}
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Follow Us</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
              <a
                href="#"
                className="fs-5 social-icon"
                style={{ color: "#4267B2" }}
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="fs-5 social-icon"
                style={{ color: "#1DA1F2" }}
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="fs-5 social-icon"
                style={{ color: "#E1306C" }}
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="fs-5 social-icon"
                style={{ color: "#FF0000" }}
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center text-muted small mb-0">
          &copy; {new Date().getFullYear()} FlickVerse. All rights reserved.
        </p>
      </div>

      {/* Inline Styling */}
      <style>
        {`
          .brand-text {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
          }

          .hover-link:hover {
            color: #667eea !important;
            text-decoration: underline;
            transition: all 0.2s ease;
          }

          .social-icon:hover {
            transform: translateY(-2px);
            transition: all 0.2s ease;
            opacity: 0.9;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
