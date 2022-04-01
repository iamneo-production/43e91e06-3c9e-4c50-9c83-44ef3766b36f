import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getFakeLogin } from './Pages/User/SignupPageUser';

function ProtectedRoute() {
    const isLoggedIn = getFakeLogin()
  return (isLoggedIn?<Outlet/>:<Navigate to="/user/signup"/>);
}

export default ProtectedRoute