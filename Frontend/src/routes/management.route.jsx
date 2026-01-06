// management.route.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../pages/Dashboard';

const ManagementRoutes = () => {
  return (
    <Route path="management">
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  );
};

export default ManagementRoutes;
