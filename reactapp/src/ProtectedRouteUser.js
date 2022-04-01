import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getFakeLogin } from './Pages/User/AuthenticateUser';

function ProtectedRoute() {
    const isLoggedIn = getFakeLogin()
  return (isLoggedIn?<Outlet/>:<Navigate to="/user/login"/>);
}

export default ProtectedRoute