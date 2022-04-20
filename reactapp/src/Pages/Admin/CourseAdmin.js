import React, { useState } from 'react';
import { useEffect } from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Style.css'
import AdminService from './AdminService';
import { fetchUserData } from '../../Api/AuthenticationService';





function CourseAdmin() {
    const usenavigate = useNavigate();
    const [course, setCourse] = useState([]);
    const [query, setQuery] = useState("");



    const onClick = () => {
        usenavigate("/admin/addCourse")
    }

    function Update(courseid) {
        console.log(courseid)
        usenavigate('/admin/editCourse/' + courseid)
    }

    useEffect(() => {
        getAllCourse();
    }, [])

    const getAllCourse = () => {
        AdminService.getAllCourse().then((response) => {
            setCourse(response.data)

            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }


    const deleteCourseById = (courseid) => {
        AdminService.deleteCourseById(courseid).then((response) => {
            getAllCourse();
            alert("The Course Deleted SucessFully")
        }).catch(error => {
            console.log(error);
        })
    }

    const logOut = () => {
        sessionStorage.clear()
        localStorage.clear();
        usenavigate('/');

    }


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
                            <ReactBootStarp.Nav.Link className="gradient" href="/admin/academyadmin">Academy</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link className="gradient active" href="/admin/courseadmin">Course</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link className="gradient" href="/admin/studentadmin">Students</ReactBootStarp.Nav.Link>

                            <ReactBootStarp.Nav.Link className="gradient" href="/admin/news">News Feed</ReactBootStarp.Nav.Link>
                        </ReactBootStarp.Nav>
                        <ReactBootStarp.Nav>
                            <ReactBootStarp.NavDropdown className="gradient" title="More Info" id="collasible-nav-dropdown">
                                <ReactBootStarp.NavDropdown.Item href="/admin/Profile">Profile</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Item href="/admin/moreinfo">About</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Divider />
                                <ReactBootStarp.NavDropdown.Item onClick={() => logOut()}>LogOut</ReactBootStarp.NavDropdown.Item>
                            </ReactBootStarp.NavDropdown>
                        </ReactBootStarp.Nav>
                    </ReactBootStarp.Navbar.Collapse>
                </ReactBootStarp.Container>
            </ReactBootStarp.Navbar>



            <div>
                <div class="container h-100">
                    <div class="d-flex justify-content-center h-100">
                        <div className='buttonal'>
                            <button type="button" class="custom-btn btn-5" onClick={() => onClick()}>Add Course</button>
                        </div>
                        <div class="searchbar">
                            <input class="search_input" type="text" name="" onChange={e => setQuery(e.target.value)} placeholder="Search..." />
                            <a class="search_icon"><i class="fas fa-search"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div>
                {

                    course.filter(course => course.coursename.toLowerCase().includes(query)).map(
                        course =>
                            <div>
                                <ReactBootStarp.Card>
                                    <ReactBootStarp.Card.Header className="gradient">Info : {course.courseid}</ReactBootStarp.Card.Header>
                                    <ReactBootStarp.Card.Body>
                                        <ReactBootStarp.Card.Title >Course Name: {course.coursename}</ReactBootStarp.Card.Title>
                                        <div>Course Description: {course.courseDescription}</div>
                                        <br></br>
                                        <div>Course Duration: {course.courseDuration} Years</div>
                                        <br/>
                                        <div>Institute Id: {course.instituteid}</div>
                                        <button variant="success" class="custom-btn btn-5" onClick={() => Update(course.courseid)}>Update</button>
                                        <button  class="custom-btn btn-5 mv" variant="danger" onClick={() => deleteCourseById(course.courseid)}>
                                            Delete</button>

                                    </ReactBootStarp.Card.Body>
                                </ReactBootStarp.Card>
                                <br/>
                            </div>
                    )
                }
            </div>
                


        </div>
    )
}

export default CourseAdmin;