import React, { useState } from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../Style.css'
import { useEffect } from 'react';
import Service from './StudentServiceAdmin';
import { fetchUserData } from '../../Api/AuthenticationService';




const MainWrapper = styled.div`
    padding-top:40px;
`;

export const StudentAdmin = (props) => {
    const usenavigate = useNavigate();
    const [student, setStudent] = useState([])
    const[query,setQuery]=useState('');
    const [data, setData] = useState({});


    useEffect(()=>{
        if(data.username==="undefined"){
            localStorage.clear();
            usenavigate('/')
        }
    },)

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();

        })
    }, [])

    useEffect(() => {
        getAllStudents();
    }, [])

    const getAllStudents = () => {
        fetch("https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/student/viewStudents")
            .then(res => res.json())
            .then((result) => {
                setStudent(result)
            }).catch(error => {
                console.log(error);
            })
    }
    const deleteStudentById = (studentid) => {
        (
            Service.deleteStudentById(studentid).then((response) => {
                getAllStudents();
                alert("The Student Deleted SucessFully")
            }).catch(error => {
                console.log(error);

            })

        )
    }
    function Update(studentid) {
        console.log(studentid);
        usenavigate('/admin/editStudent/' + studentid)
    }

    const handleclick = () => {
        usenavigate("/admin/addstudent");
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
                            <input class="search_input" type="text" name="" onChange={e => setQuery(e.target.value)} placeholder="Search..." />
                            <a class="search_icon"><i class="fas fa-search"></i></a>
                        </div>
                    </div>
                </div>
            </div>



            

            <ReactBootStarp.Table striped bordered hover variant="dark">
            <div>
            
            {
                student.filter(student=>student.studentName.toLowerCase().includes(query)).map(student => (

                    <div>
                        <ReactBootStarp.Card>
                            <ReactBootStarp.Card.Header className="gradient">Student Id : {student.id}</ReactBootStarp.Card.Header>
                            <ReactBootStarp.Card.Body>
                                <ReactBootStarp.Card.Title>Student Name: {student.studentName}</ReactBootStarp.Card.Title>
                                <br/>
                                <div>Course ID: {student.courseid}</div>
                                <br/>
                                <div>Enrolled Course: {student.coursename} </div>
                                <br/>
                                <div>Institute ID: {student.instituteid}</div>
                                <br/>
                                <div>Institute Name: {student.institutename} </div>
                                <div>
                                    <ReactBootStarp.Button variant="success" size="sl" type="submit" onClick={()=>Update(student.studentid)}>
                                        Edit Admission
                                    </ReactBootStarp.Button>
                                    <ReactBootStarp.Button variant="danger" size="sl" type="submit" onClick={()=>deleteStudentById(student.studentid)}>
                                        Delete Admission
                                    </ReactBootStarp.Button>
                                </div>
                                
                            </ReactBootStarp.Card.Body>
                        </ReactBootStarp.Card>
                    </div>
                )
                )
            }
        </div>
    
   
  
</ReactBootStarp.Table>
           






        </div>
    )
}

export default StudentAdmin;