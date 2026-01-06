
// layouts/Authentication.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const Authentication = () => {

  const currentYear = new Date().getFullYear()


  return (

    <div className="auth-box overflow-hidden align-items-center d-flex">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-4 col-md-6 col-sm-8">

            <Outlet />

            <p className="text-center text-muted mt-4 mb-0">
              © {currentYear} ZDesk By <span className="fw-semibold">Zeus Atlas Limited</span>
            </p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Authentication;
