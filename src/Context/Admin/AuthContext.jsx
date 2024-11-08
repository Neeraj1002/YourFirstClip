import React, { createContext, useState } from 'react';
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

 // Optional: Decode JWT to extract user information
 const decodeToken = (token) => {
  if (!token) return null;
  try {
    return jwtDecode(token); // Use jwt-decode to decode the JWT
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};


export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    user: localStorage.getItem('token') ? decodeToken(localStorage.getItem('token')) : null,
  });

  

  const login =  (token) => {
      if(token)
      localStorage.setItem('token', token); // Store the token in localStorage
      setAuth({ token, user: decodeToken(token) }); // Decode token to get user data
    
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ token: null, user: null });
  };

 

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
