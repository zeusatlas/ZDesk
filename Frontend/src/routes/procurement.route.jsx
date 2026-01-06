// procurement.route.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../pages/Dashboard';

const ProcurementRoutes = () => {
  return (
    <Route path="procurement">
      <Route path="dashboard" element={<Dashboard />} />
    </Route>

  );
};

export default ProcurementRoutes;
