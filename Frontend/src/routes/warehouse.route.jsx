// warehouse.route.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../pages/Dashboard';

const WarehouseRoutes = () => {
  return (

    <Route path="warehouse">
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  );
};

export default WarehouseRoutes;
