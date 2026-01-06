// account.route.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../pages/Dashboard';

const AccountRoutes = () => {
  return (
    <Route path="account">
        <Route path="dashboard" element={<Dashboard />} /> 
      </Route>
  );
};

export default AccountRoutes;
