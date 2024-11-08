import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/Admin/AuthContext';

const PrivateRoute = () => {
  const { auth } = useContext(AuthContext);

  // If user is authenticated, render the children (via Outlet)
  // Otherwise, redirect to the login page
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
