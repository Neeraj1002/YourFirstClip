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

  // Logout on tab close
  window.addEventListener('beforeunload', () => {
    logout();
  });

  // Logout after a period of inactivity (e.g., 30 minutes)
  const inactivityTimeout = 30 * 60 * 1000; // 30 minutes
  let timeoutId;

  const resetInactivityTimeout = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(logout, inactivityTimeout);
  };

  const handleUserActivity = () => {
    resetInactivityTimeout();
  };

  // Set up activity listeners
  window.addEventListener('mousemove', handleUserActivity);
  window.addEventListener('keydown', handleUserActivity);

  // Initialize timeout on component mount
  React.useEffect(() => {
    resetInactivityTimeout();
    return () => {
      clearTimeout(timeoutId); // Clear timeout if component unmounts
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

 

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
