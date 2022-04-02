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
    <BrowserRouter>
      <div >
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
        
      



          <Route path='/admin/signupredirect1' element={<SignupPageAdminRed1 />} />
          <Route path='/admin/signupredirect2' element={<SignupPageAdminRe />} />



          <Route path="/admin/Authentication" element={<AuthAdmin />} />


          <Route path="/user/login" element={<LoginPageUser />} />
          <Route path='/user/signup' element={<SignupUser />} />

          <Route path='/user/signupredirect1' element={<SignupPageUserRed1 />} />
          <Route path='/user/signupredirect2' element={<SignupPageUserRed2 />} />


          <Route path="/user/Authentication" element={<AuthUser />} />


          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<DashboardAdmin />} />
            <Route path="/admin/courseadmin" element={<CourseAdmin />} />
            <Route path="/admin/academyadmin" element={<AcademyAdmin />} />
            <Route path="/admin/addInstitute" element={<AddInstituteAdmin />} />
            <Route path="/admin/addStudent" element={<AddStudent />} />
            <Route path="/admin/addCourse" element={<AddCourseAdmin />} />
            <Route path="/admin/profile" element={<ProfileAdmin />} />
            <Route path="/admin/news" element={<NewsAdmin />} />
            <Route path="/admin/studentadmin" element={<StudentAdmin />} />
            <Route path="/admin/moreinfo" element={<MoreInfoAdmin />} />


          </Route>

          <Route element={<ProtectedRouteUser />}>
            <Route path="/user/enrollCourse/:instituteid" element={<EnrollCourse />} />
            <Route path="/user/dashboard" element={<DashboardUser />} />
            <Route path="/user/viewInstitute" element={<InstituteUser />} />
            <Route path="/user/moreinfo" element={<MoreInfoUser />} />
            <Route path="/user/profile" element={<ProfileUser />} />
            <Route path="/user/news" element={<NewsUser />} />
            <Route path="/user/help" element={<Help />} />
          </Route>



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
