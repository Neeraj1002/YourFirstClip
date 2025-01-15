import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


const API_URL = process.env.REACT_APP_API_URL || 'https://api.yourfirstclip.com';


// Create an Axios instance with default configurations
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add authorization token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Adjust the key if your token is stored elsewhere
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Error handling function
const handleApiError = (error) => {
  if (error.response) {
    // Server responded with a status other than 2xx
    console.error('API error response:', error.response);
    return error.response.data.msg || 'An error occurred on the server';
  } else if (error.request) {
    // Request was made but no response received
    console.error('API error request:', error.request);
    return 'No response from server. Please try again later.';
  } else {
    // Something happened in setting up the request
    console.error('API error:', error.message);
    return 'Could not complete the request. Please try again.';
  }
};

// Fetch all portfolios
export const fetchPortfolios = async () => {
  try {
    const response = await api.get('/portfolios');
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

// Create a new portfolio
export const createPortfolio = async (portfolioData) => {
  const token = localStorage.getItem('token');
  const tokenData = jwtDecode(token);
  try {
    const response = await api.post('/portfolios', {...portfolioData, creator: tokenData.userId});
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

// Update an existing portfolio
export const updatePortfolio = async (id, portfolioData) => {
  const token = localStorage.getItem('token');
  const tokenData = jwtDecode(token);
  try {
    const response = await api.put(`/portfolios/${id}`, {...portfolioData, creator: tokenData.userId});
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

// Delete a portfolio
export const deletePortfolio = async (id) => {
  try {
    const response = await api.delete(`/portfolios/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
