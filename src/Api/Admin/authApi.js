import axios from 'axios';
import {LOGIN,SIGNUP} from '../../Admin/Constant/Constant'

const API_URL = process.env.REACT_APP_API_URL || 'https://api.yourfirstclip.com/api';

// API call to log in a user
export const loginUser = async (data) => {
  const response = await axios.post(`${API_URL}${LOGIN}`, data, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  return response; // Return the token and user data from the response
};

// API call to sign up a new user (if needed)
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}${SIGNUP}`, userData, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  return response;
};

// API call to verify a token (optional, if your backend has a route for this)
export const verifyToken = async (token) => {
  const response = await axios.post(`${API_URL}/auth/verify-token`, { token });
  return response.data;
};
