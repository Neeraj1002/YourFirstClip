import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';

const NewUserPage = () => {
  const navigate = useNavigate();

  const handleSave = (userData) => {
    console.log('New User Data:', userData);
    // Logic to save the new user (e.g., API call)
    navigate('/admin/users'); // Redirect after save
  };

  const handleCancel = () => {
    navigate('/admin/users'); // Redirect on cancel
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add New User</h2>
      <UserForm onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default NewUserPage;
