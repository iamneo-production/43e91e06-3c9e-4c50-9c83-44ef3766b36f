import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import LoginPageAdmin from './Pages/Admin/LoginPageAdmin';
import LoginPageUser from './Pages/User/LoginPageUser';
import SignupAdmin from './Pages/Admin/SignupPageAdmin';
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
import MoreInfoUser from './Pages/User/MoreInfoUser'
import SignupPageAdminRe from './Pages/Admin/SignupPageAdminRe';
import EnrollCourse from './Pages/User/EnrollCourse';
import AddStudentAdmin from './Pages/Admin/AddStudentAdmin'
import SignupPageUser from './Pages/User/SignupPageUser';
import SignupPageUserRe from './Pages/User/SignupPageUserRed2';
import SignupPageUserRed1 from './Pages/User/SignupPageUserRed1';
import EditCourse from './Pages/Admin/EditCourse';
import Mailer from './Pages/Admin/Mailer';
import Redirect from './Pages/Admin/RedirectMailer';
import EditInstitute from './Pages/Admin/EditInstitute';
import EnrolledCourse from './Pages/User/EnrolledCourse';
import Enrolldetail from './Pages/User/Enrolldetails';
import EditEnroll from './Pages/User/EditEnroll';
import StudentAdmission from './Pages/Admin/AddAdmissionStu'
import EditStudentAdmin from './Pages/Admin/EditStudentAdmin';



function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/admin/login" element={<LoginPageAdmin/>}/>
          <Route path='/admin/signup' element={<SignupAdmin/>}/>
          <Route path='/admin/signupredirect1/:username' element={<SignupPageAdminRed1/>}/>
          <Route path='/admin/signupredirect2/:username' element={<SignupPageAdminRe/>}/>
          <Route path="/admin/Authentication" element={<AuthAdmin/>}/>
          <Route path='/admin/mailer' element={<Mailer/>}/>
          <Route path='/admin/redirected' element={<Redirect/>}/>
          

          <Route path="/user/login" element={<LoginPageUser/>}/>
          <Route path='/user/signup' element={<SignupPageUser/>}/>
          <Route path='/user/signupredirect1/:username' element={<SignupPageUserRed1/>}/>
          <Route path='/user/signupredirect2/:username' element={<SignupPageUserRe/>}/>

          <Route path="/user/Authentication" element={<AuthUser/>}/>
          

          <Route element={<ProtectedRoute/>}>
            <Route path="/admin/dashboard" element={<DashboardAdmin/>}/>
            <Route path="/admin/courseadmin" element={<CourseAdmin/>}/>
            <Route path="/admin/academyadmin" element={<AcademyAdmin/>}/>
            <Route path="/admin/addInstitute" element={<AddInstituteAdmin/>}/>
            <Route path="/admin/addCourse" element={<AddCourseAdmin/>}/>
            <Route path="/admin/editCourse/:courseid" element={<EditCourse/>}/>
            <Route path="/admin/editInstitute/:instituteid" element={<EditInstitute/>}/>
            <Route path="/admin/profile" element={<ProfileAdmin/>}/>
            <Route path="/admin/news" element={<NewsAdmin/>}/>
            <Route path="/admin/addStudent" element={<AddStudentAdmin/>}/>
            <Route path="/admin/studentadmin" element={<StudentAdmin/>}/>
            <Route path="/admin/moreinfo" element={<MoreInfoAdmin/>}/>
            <Route path="/admin/addstudent" element={<StudentAdmission/>}/>
            <Route path="/admin/editStudent/:studentid" element={<EditStudentAdmin/>}/>

          </Route>

          <Route element={<ProtectedRouteUser/>}>
            <Route path="/user/enrollCourse/:instituteid/:institutename" element={<EnrollCourse/>}/>
            <Route path="/user/enrolldetails/:coursename/:courseid/:instituteid/:institutename" element={<Enrolldetail/>}/>
            <Route path="/user/enrolledCourse/:id" element={<EnrolledCourse/>}/> 
            <Route path="/user/editEnroll/:studentid" element={<EditEnroll/>}/>
            <Route path="/user/dashboard" element={<DashboardUser/>}/>
            <Route path="/user/moreinfo" element={<MoreInfoUser/>}/>
            <Route path="/user/viewInstitute" element={<InstituteUser/>}/>
            <Route path="/user/profile" element={<ProfileUser/>}/>
            <Route path="/user/news" element={<NewsUser/>}/>
            <Route path="/user/help" element={<Help/>}/>
          </Route>



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
