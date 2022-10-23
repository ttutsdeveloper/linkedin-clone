import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Dashboard from "../features/dashboard/Dashboard";

const AppRoute = () => {
    return <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/dashboard" element={
        <PrivateRoute>
            <Dashboard/>
        </PrivateRoute>
      } />
    </Routes>
  </Router>
};

export default AppRoute;