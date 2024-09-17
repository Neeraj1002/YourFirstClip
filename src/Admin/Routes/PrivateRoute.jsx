import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { auth } = useContext(AuthContext);

  return (
    <Routes>
    <Route
      {...rest}
      element={auth.token ? <Component /> : <Navigate to="/admin/login" />}
    />
    </Routes>
  );
};

export default PrivateRoute;
