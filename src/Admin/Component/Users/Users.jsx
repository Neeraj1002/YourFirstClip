import React from 'react';
import Table from '../Common/Table';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate();
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const columns = ['ID', 'Name', 'Email'];

  const handleView = (user) => {
    console.log('View user:', user);
  };

  const handleEdit = (user) => {
    navigate(`/admin/users/edit/${user?.id}`); // Absolute path
  };
  
  const handleDelete = (user) => {
    console.log('Delete user:', user);
  };
  
  const handleAdd = () => {
    navigate('/admin/users/new'); // Absolute path
  };
  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Users</h2>
      <Table 
        columns={columns} 
        data={users} 
        onView={handleView} 
        onEdit={handleEdit} 
        onDelete={handleDelete}
        onAdd={handleAdd}  // Pass the add handler
      />
    </div>
  );
};

export default Users;
