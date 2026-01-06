// routes/auth.route.jsx
import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Login";
import Authentication from "../layouts/Authentication";

const AuthRoutes = () => {
  return (
    <Route element={<Authentication />}>
      <Route path="auth">
        <Route path="login" element={<Login />} /> 
      </Route>
      <Route path="/" element={<Login />} /> 

    </Route>
  );
};

export default AuthRoutes;
