import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from './UserForm';

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user based on the ID
    const fetchedUser = {
      id,
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@example.com',
      role: 'U',
    };
    setUser(fetchedUser);
  }, [id]);

  const handleSave = (userData) => {
    console.log('Updated User Data:', userData);
    // Logic to save the updated user (e.g., API call)
    navigate('/admin/users'); // Redirect after save
  };

  const handleCancel = () => {
    navigate('/admin/users'); // Redirect on cancel
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Edit User</h2>
      {user && <UserForm user={user} onSave={handleSave} onCancel={handleCancel} />}
    </div>
  );
};

export default EditUserPage;
