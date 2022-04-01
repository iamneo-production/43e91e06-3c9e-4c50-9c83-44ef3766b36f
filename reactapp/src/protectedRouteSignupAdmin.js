import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getFakeLogin } from './Pages/Admin/SignupPageAdmin';

function ProtectedRoute() {
    const isLoggedIn = getFakeLogin()
  return (isLoggedIn?<Outlet/>:<Navigate to="/admin/signup"/>);
}

export default ProtectedRoute