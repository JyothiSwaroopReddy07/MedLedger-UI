import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../Context/StateContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  console.log(user);

  return children;
};

export default ProtectedRoute;
