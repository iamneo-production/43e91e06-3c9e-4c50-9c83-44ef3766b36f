import {BrowserRouter,Route,Routes} from 'react-router-dom';
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
import MoreInfoUser from './Pages/User/MoreInfoUser'
import SignupPageAdminRe from './Pages/Admin/SignupPageAdminRe';
import SignupPageUserRed1 from './Pages/User/SignupPageUserRed1';
import SignupPageUserRed2 from './Pages/User/SignupPageUserRed2';
import EnrollCourse from './Pages/User/EnrollCourse';
import AddStudentAdmin from './Pages/Admin/AddStudentAdmin'



function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/admin/login" element={<LoginPageAdmin/>}/>
          <Route path='/admin/signup' element={<SignupAdmin/>}/>
          <Route path='/admin/signupredirect1' element={<SignupPageAdminRed1/>}/>
          <Route path='/admin/signupredirect2' element={<SignupPageAdminRe/>}/>
          <Route path="/admin/Authentication" element={<AuthAdmin/>}/>
          

          <Route path="/user/login" element={<LoginPageUser/>}/>
          <Route path='/user/signup' element={<SignupUser/>}/>
          <Route path='/user/signupredirect1' element={<SignupPageUserRed1/>}/>
          <Route path='/user/signupredirect2' element={<SignupPageUserRed2/>}/>

          <Route path="/user/Authentication" element={<AuthUser/>}/>
          

          <Route element={<ProtectedRoute/>}>
            <Route path="/admin/dashboard" element={<DashboardAdmin/>}/>
            <Route path="/admin/courseadmin" element={<CourseAdmin/>}/>
            <Route path="/admin/academyadmin" element={<AcademyAdmin/>}/>
            <Route path="/admin/addInstitute" element={<AddInstituteAdmin/>}/>
            <Route path="/admin/addCourse" element={<AddCourseAdmin/>}/>
            <Route path="/admin/profile" element={<ProfileAdmin/>}/>
            <Route path="/admin/news" element={<NewsAdmin/>}/>
            <Route path="/admin/addStudent" element={<AddStudentAdmin/>}/>
            <Route path="/admin/studentadmin" element={<StudentAdmin/>}/>
            <Route path="/admin/moreinfo" element={<MoreInfoAdmin/>}/>


          </Route>

          <Route element={<ProtectedRouteUser/>}>
          <Route path="/user/enrollCourse/:instituteid" element={<EnrollCourse/>}/>  
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
