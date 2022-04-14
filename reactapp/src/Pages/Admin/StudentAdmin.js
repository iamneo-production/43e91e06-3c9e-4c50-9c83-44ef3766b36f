import React, { useState } from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../Style.css'
import { useEffect } from 'react';
import Service from './StudentServiceAdmin'
import './Card.css'




const MainWrapper = styled.div`
    padding-top:40px;
`;

export const StudentAdmin = (props) => {
    const usenavigate = useNavigate();
    const [students, setStudents] = useState([])
    useEffect(() => {
        getAllStudents();
    }, [])

    const getAllStudents = () => {
        fetch("https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/student/viewStudents")
            .then(res => res.json())
            .then((result) => {
                setStudents(result)
            }).catch(error => {
                console.log(error);
            })
    }
    const deleteStudentById = (id) => {
        (
            Service.deleteStudentById(id).then((response) => {
                getAllStudents();
            }).catch(error => {
                console.log(error);

            })

        )
    }
    function Update(id) {
        console.log(id);
        usenavigate('/admin/editAdmission/' + id)
    }

    const handleclick = () => {
        usenavigate("/admin/addStudent");
    }

    const logOut = () => {
        sessionStorage.clear()
        localStorage.clear();
        usenavigate('/');

    }

    return (
        <div className='area'>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
            <ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStarp.Container>
                    <ReactBootStarp.Navbar.Brand href="/admin/dashboard">PG_Admission</ReactBootStarp.Navbar.Brand>
                    <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStarp.Nav className="me-auto">
                            <ReactBootStarp.Nav.Link href="/admin/academyadmin">Academy</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link href="/admin/courseadmin">Course</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link className='active' href="/admin/studentadmin">Students</ReactBootStarp.Nav.Link>

                            <ReactBootStarp.Nav.Link href="/admin/news">News Feed</ReactBootStarp.Nav.Link>
                        </ReactBootStarp.Nav>
                        <ReactBootStarp.Nav>
                            <ReactBootStarp.NavDropdown title="More Info" id="collasible-nav-dropdown">
                                <ReactBootStarp.NavDropdown.Item href="/admin/Profile">Profile</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Item href="/admin/moreinfo">About</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Divider />
                                <ReactBootStarp.NavDropdown.Item onClick={() => logOut()}>LogOut</ReactBootStarp.NavDropdown.Item>
                            </ReactBootStarp.NavDropdown>
                        </ReactBootStarp.Nav>
                    </ReactBootStarp.Navbar.Collapse>
                </ReactBootStarp.Container>
            </ReactBootStarp.Navbar>

            <br></br>
            <div>
                <div class="container h-100">
                    <div class="d-flex justify-content-center h-100">
                        <div className='buttonal'>
                            <button type="button" class="custom-btn btn-5" onClick={() => handleclick()}>Add Student</button>
                        </div>
                        <div class="searchbar">
                            <input class="search_input" type="text" name="" placeholder="Search..." />
                            <a class="search_icon"><i class="fas fa-search"></i></a>
                        </div>
                    </div>
                </div>
            </div>



            

            <ReactBootStarp.Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Id</th>
      <th>Student Name</th>
      <th>Institute Name</th>
      <th>Enrolled Course</th>
      <th>Mobile Number</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  {
      students.map(student=>
  <tbody>
    <tr>
      <td>{student.id}</td>
      <td>{student.studentName}</td>
      <td>{student.institutename}</td>
      <td>{student.coursename}</td>
      <td>{student.mobile}</td>
      <td><ReactBootStrap.Button >Edit</ReactBootStrap.Button></td>
      <td><ReactBootStrap.Button >Delete</ReactBootStrap.Button></td>
    </tr>
    </tbody>
    )
  }
    
   
  
</ReactBootStarp.Table>
           






        </div>
    )
}

export default StudentAdmin;