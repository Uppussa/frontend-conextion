import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticateUser = async (token) => {
    try {
      const res = await axios.get('http://localhost:3000/api/auth/dashboard', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      console.error('Error al autenticar el usuario: ', error);
      setIsAuthenticated(false);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
      authenticateUser(res.data.token);
    } catch (error) {
      console.log('Error during login:', error);
      alert(error.response?.data?.message || 'Error during login');
    }
  };

  const register = async (email, password) => {
    try {
      await axios.post('http://localhost:3000/api/auth/register', { email, password });
    } catch (error) {
      console.error('Error during registration:', error);
      alert(error.response?.data?.message || 'Error during registration');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  const updateProfile = async (formData) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      await axios.post('http://localhost:3000/api/auth/updateProfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
      // Actualizar la información del usuario en el contexto
      authenticateUser(token);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authenticateUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
