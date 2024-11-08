import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  mobileNumber: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  role: Yup.string().required('Role is required'),
});

const UserForm = ({ user, onSave, onCancel }) => {
  const formik = useFormik({
    initialValues: {
      name: user?.name || '',
      mobileNumber: user?.mobileNumber || '',
      email: user?.email || '',
      role: user?.role || 'U', // Default to 'U' (User)
    },
    validationSchema,
    onSubmit: (values) => {
      onSave(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{user ? 'Edit User' : 'Add New User'}</h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        ) : null}
      </div>

      {/* Mobile Number */}
      <div className="mb-4">
        <label className="block text-gray-700">Mobile Number</label>
        <input
          type="text"
          name="mobileNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobileNumber}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
        {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
          <div className="text-red-500 text-sm">{formik.errors.mobileNumber}</div>
        ) : null}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>

      {/* Role */}
      <div className="mb-4">
        <label className="block text-gray-700">Role</label>
        <select
          name="role"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.role}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        >
          <option value="U">User</option>
          <option value="O">Owner</option>
        </select>
        {formik.touched.role && formik.errors.role ? (
          <div className="text-red-500 text-sm">{formik.errors.role}</div>
        ) : null}
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default UserForm;
