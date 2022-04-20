import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getTokenLogin } from './Pages/User/AuthenticateUser';

function ProtectedRoute() {
    const isLoggedIn = getTokenLogin()
  return (isLoggedIn?<Outlet/>:<Navigate to="/user/login"/>);
}

export default ProtectedRoute