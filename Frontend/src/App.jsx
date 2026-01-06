import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

import AuthRoutes from './routes/auth.route';
import AccountRoutes from './routes/account.route';
import HRRoutes from './routes/hr.route';
import ProcurementRoutes from './routes/procurement.route';
import WarehouseRoutes from './routes/warehouse.route';
import SafetyRoutes from './routes/safety.route';
import ManagementRoutes from './routes/management.route';
import AdministrationRoutes from './routes/management.route';

import NotFound from './pages/NotFound';
import RootLayout from './layouts/Root';
import CoreRoutes from './routes/core.route';

function App() {

  const username = sessionStorage.getItem('username');

  const protectedPaths = [ '/hr/dashboard'];

  if (!username && protectedPaths.some(path => window.location.pathname.startsWith(path))) {
    window.location.href = '/auth/login';
    return null; 
  }

  return (
    <>
      <Toaster richColors position="top-right" expand={true} closeButton />

      {/* Auth rendered outside layout */}

      <Routes>
        {/* Auth routes */}
        {AuthRoutes()}

        {/* Routes inside RootLayout */}
        <Route element={<RootLayout />}>
          {AccountRoutes()}
          {HRRoutes()}
          {ProcurementRoutes()}
          {WarehouseRoutes()}
          {SafetyRoutes()}
          {ManagementRoutes()}
          {AdministrationRoutes()}
          {CoreRoutes()}
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
