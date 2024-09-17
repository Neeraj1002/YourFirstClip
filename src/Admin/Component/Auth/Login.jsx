// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link,useNavigate  } from 'react-router-dom';
import Spinner from '../Common/Spinner'; // Adjust path as needed
import ToastMessage, { notifySuccess, notifyError } from '../Common/ToastMessage'; // Adjust path as needed

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const navigate = useNavigate ()
  const onSubmit = async (data) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Ensure this header is included
        },
        body: JSON.stringify(data), // Convert data to JSON string
      });

      if (response.ok) {
        const result = await response.json();
        notifySuccess("Login successful"); // Show success message
        setTimeout(() => {
          reset(); // Reset form fields
          navigate('/admin/dashboard'); // Redirect to login page
        }, 2000); // 2000 milliseconds = 2 seconds
      
        // Handle successful login (e.g., redirect or update state)
      } else {
        // Handle server errors or validation errors
        const errorData = await response.json();
        notifyError(errorData.message || "Something went wrong"); // Show error message
      }
    } catch (error) {
      console.error('Error:', error); // Handle any errors
      notifyError("Network error"); // Show network error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {loading && <Spinner />} {/* Show spinner while loading */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address'
                }
              })}
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {typeof errors.email.message === 'string' ? errors.email.message : 'Invalid email address'}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
              className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {typeof errors.password.message === 'string' ? errors.password.message : 'Password is required'}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            Login
          </button>

          {/* Navigate to Sign Up */}
          <div className="mt-4 text-center">
            <p className="text-gray-700">Don't have an account?</p>
            <Link to="/admin/signup" className="text-blue-500 hover:underline">Sign Up</Link>
          </div>
        </form>
      </div>
      <ToastMessage /> {/* Include ToastMessage component */}
    </div>
  );
};

export default LoginPage;
