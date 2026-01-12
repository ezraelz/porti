import React, { useEffect } from 'react'
import { useAuth } from '../../context/authContext'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    if (!user) return <Navigate to="/login" replace/>

  return children;
}

export default ProtectedRoute