import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getFakeLogin } from './Pages/Admin/AuthenticateAdmin';

function ProtectedRoute() {
    const isLoggedIn = getFakeLogin()
  return (isLoggedIn?<Outlet/>:<Navigate to="/admin/login"/>);
}

export default ProtectedRoute