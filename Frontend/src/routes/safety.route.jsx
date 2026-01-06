// safety.route.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../pages/Dashboard';

const SafetyRoutes = () => {
  return (
    <Route path="safety">
      <Route path="dashboard" element={<Dashboard />} />
    </Route>

  );
};

export default SafetyRoutes;
