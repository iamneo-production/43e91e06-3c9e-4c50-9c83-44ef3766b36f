import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getTokenLogin } from './Pages/Admin/AuthenticateAdmin';

function ProtectedRoute() {
  const isLoggedIn = getTokenLogin()
  return (isLoggedIn?<Outlet/>:<Navigate to="/admin/login"/>);
}

export default ProtectedRoute