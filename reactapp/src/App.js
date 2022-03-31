import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import User from './components/User';
import AddUser from './components/AddStudent';
import AdminStudent from './components/AdminStudent';
import DisplayStudent from './components/DisplayStudent';
import EditStudent from './components/EditStudent';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/admin/student' element={<AdminStudent />} />
          <Route exact path='/admin/viewStudent' element={<DisplayStudent />} ></Route>
          <Route exact path='/admin/addStudent' element={<AddUser />} />
          <Route exact path='/admin/editStudent/:id' element={<EditStudent />} />
          <Route exact path='/admin/viewDetailsStudent/:id' element={<ViewStudent />} />
          <Route exact path="/" element={<Login></Login>} />
          <Route exact path="/Signup" element={<Signup></Signup>} />
          <Route exact path="/Admin/Dashboard" element={<Dashboard />} />
          <Route exact path="/User/Dashboard" element={<User />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
