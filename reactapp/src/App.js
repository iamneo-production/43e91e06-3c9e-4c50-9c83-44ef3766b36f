<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import LoginPageAdmin from './Pages/Admin/LoginPageAdmin';
import LoginPageUser from './Pages/User/LoginPageUser';
import SignupAdmin from './Pages/Admin/SignupPageAdmin';
import SignupUser from './Pages/User/SignupPageUser';
import AuthAdmin from './Pages/Admin/AuthenticateAdmin';
import AuthUser from './Pages/User/AuthenticateUser';
import SignupPageAdminRed1 from './Pages/Admin/SignupPageAdminRed1';
import DashboardAdmin from './Pages/Admin/DashboardAdmin';
import StudentAdmin from './Pages/Admin/StudentAdmin';
import CourseAdmin from './Pages/Admin/CourseAdmin';
import DashboardUser from './Pages/User/DashboardUser';
import NewsAdmin from './Pages/Admin/NewsAdmin'
import AcademyAdmin from './Pages/Admin/AcademyAdmin';
import AddInstituteAdmin from './Pages/Admin/AddInstituteAdmin'
import ProfileAdmin from './Pages/Admin/ProfileAdmin';
import InstituteUser from './Pages/User/InstituteUser';
import ProfileUser from './Pages/User/ProfileUser';
import NewsUser from './Pages/User/NewsUser';
import Help from './Pages/User/Help&Support';
import AddCourseAdmin from './Pages/Admin/AddCourseAdmin';
import ProtectedRoute from './ProtectedRoute';
import ProtectedRouteUser from './ProtectedRouteUser';
import MoreInfoAdmin from './Pages/Admin/MoreInfoAdmin';
import SignupPageAdminRe from './Pages/Admin/SignupPageAdminRe';
import SignupPageUserRed1 from './Pages/User/SignupPageUserRed1';
import SignupPageUserRed2 from './Pages/User/SignupPageUserRed2';
import EnrollCourse from './Pages/User/EnrollCourse';
import AddStudent from './Pages/Admin/AddStudentAdmin';
import MoreInfoUser from './Pages/User/MoreInfoUser';

=======
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
>>>>>>> 803ad88aa1ffbe56fb9011b0af8ca3c021c700bc

function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<Home />} />
          <Route path="/admin/login" element={<LoginPageAdmin />} />
          <Route path='/admin/signup' element={<SignupAdmin />} />
=======
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
>>>>>>> 803ad88aa1ffbe56fb9011b0af8ca3c021c700bc



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
