// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
          <Route exact path='/' element={<AdminStudent/>} />
          <Route exact path='/admin/viewStudent' element={<DisplayStudent />} ></Route>
          <Route exact path='/admin/addStudent' element={<AddUser/>}  />
          <Route exact path='/admin/editStudent/:id' element={<EditStudent />} />
          <Route exact path='/admin/viewDetailsStudent/:id' element={<ViewStudent />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
