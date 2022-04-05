// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import AdminCourse from './components/AdminCourse';
import DisplayCourse from './components/DisplayCourse';
import EditCourse from './components/EditCourse';
import ViewCourse from './components/ViewCourse';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<AdminCourse/>} />
          <Route exact path='/admin/viewCourse' element={<DisplayCourse />} ></Route>
          <Route exact path='/admin/addCourse' element={<AddCourse/>}  />
          <Route exact path='/admin/editCourse/:id' element={<EditCourse />} />
          <Route exact path='/admin/viewDetailsCourse/:id' element={<ViewCourse/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
