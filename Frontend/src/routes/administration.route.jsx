// administration.route.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const AdministrationRoutes = () => {
  return (
    <Route path="administration">
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  );
};

export default AdministrationRoutes;
