import React, { useState,useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../Common/Spinner'; // Adjust path as needed
import ToastMessage, { notifySuccess, notifyError } from '../Common/ToastMessage'; // Adjust path as needed
import { loginUser } from '../../../Api/Admin/authApi'; // Import login API
import {AuthContext}  from '../../../Context/Admin/AuthContext'

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await loginUser(data); // Call the login API here
      
      if (response) {
        const result = response.data;
        if (result) {
          login(result)
        }
        notifySuccess("Login successful");
        setTimeout(() => {
          reset();
          navigate('/admin');
        }, 2000);
      } else {
        const errorData = await response.data;
        notifyError(errorData.message || "Something went wrong");
      }
    } catch (error) {
      notifyError(error.response.data.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center p-4 ">
      <div className="p-8 bg-white shadow-md rounded-lg h-full w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
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

          <div className='mt-5'>
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
                <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
             </div>
          </div>
        </form>
      </div>
      <ToastMessage /> {/* Include ToastMessage component */}
    </div>
  );
};

export default LoginPage;
