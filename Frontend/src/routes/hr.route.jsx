// hr.route.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../pages/Dashboard';

const HRRoutes = () => {
  return (
    <Route path="hr">
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  );
};

export default HRRoutes;
