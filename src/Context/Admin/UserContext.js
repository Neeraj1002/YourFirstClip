import React, { createContext, useState, useEffect } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../../Api/Admin/userApi';

// Create User Context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all users
  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create a new user
  const addUser = async (user) => {
    try {
      const newUser = await createUser(user);
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Update an existing user
  const editUser = async (id, updatedUser) => {
    try {
      const user = await updateUser(id, updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === id ? user : u))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a user
  const removeUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        addUser,
        editUser,
        removeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
