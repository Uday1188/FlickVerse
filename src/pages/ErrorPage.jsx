import React from "react";
import { useRouteError, useNavigate, NavLink } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 text-danger">404</h1>
      <h3 className="mb-4">Oops! Page Not Found</h3>
      <p className="text-muted mb-4">
        The page you are looking for might have been removed,
        <br />
        had its name changed, or is temporarily unavailable.
      </p>

      {error?.statusText || error?.message ? (
        <div className="alert alert-warning mt-3">
          <strong>Error Details:</strong> {error.statusText || error.message}
        </div>
      ) : null}

      <div className="mt-4">
        <NavLink to="/" className="btn btn-info fw-semibold px-4 me-2">
          Go to Homepage
        </NavLink>

        <button
          className="btn btn-info fw-semibold px-4"
          onClick={() => navigate(-1)}
        >
          GO Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
