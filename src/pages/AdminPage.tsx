import React from 'react';
import styles from '../assets/styles/admin-page.module.css';
import Sidebar from '../components/admin/Sidebar';
import Header from '../components/admin/Header';
import { Routes, Route, Navigate } from 'react-router';
import LoginForm from '../components/auth/LoginForm';
import { Box } from '@mui/system';
import { CssBaseline, Toolbar } from '@mui/material';
import OrdersView from '../views/Orders';
import CustomersView from '../views/Customers';
import FlightsView from '../views/Flights';
import PortsView from '../views/Ports';
import AnalyticsView from '../views/Analytics';

type Props = {
}

const AdminPage: React.FC<Props> = ({ }) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${240}px)` } }}
      >
        <Toolbar />
        <Routes>
          <Route path={"orders"} element={<OrdersView />} />
          <Route path={"customers"} element={<CustomersView />} />
          <Route path={"flights"} element={<FlightsView />} />
          <Route path={"ports"} element={<PortsView />} />
          <Route path={"analytics"} element={<AnalyticsView />} />
          {/*<Route path={Routes.SETTINGS} element={SettingsView} /> */}
          <Route
            path="*"
            element={<Navigate to="/app/ports" />}
          />
        </Routes>
      </Box>
    </Box>
  )
}

export default AdminPage
