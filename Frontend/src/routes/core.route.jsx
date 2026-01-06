
// account.route.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import DriveHome from '../pages/core/DriveHome';

const CoreRoutes = () => {
  return (
    <Route path="drive">
        <Route path="explore" element={<DriveHome />} /> 
      </Route>
  );
};

export default CoreRoutes;
