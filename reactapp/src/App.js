import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import User from './components/User';
export default function App() {
  return (
    
      <BrowserRouter>
      <div >
        <Routes>
        <Route exact path="/" element={<Login></Login>}/>
          <Route exact  path="/Signup" element={<Signup></Signup>}/>
          <Route exact path="/Admin/Dashboard" element={<Dashboard/>}/>
          <Route exact path="/User/Dashboard" element={<User/>}/>
        </Routes>
          

      </div>  
      </BrowserRouter>
    
  )
}



