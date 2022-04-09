import React, { useState, useEffect } from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../../Api/AuthenticationService';
import AcademyService from '../Admin/AcademyService'
import AdminService from '../Admin/AdminService';
import '../Style.css'





export const Institute = (props) => {
    const usenavigate = useNavigate();
    const [institute, setInstitute] = useState([]);
    const [query, setQuery] = useState("");
    const [course, setCourse] = useState([]);


    


    useEffect(() => {
        getAllInstitute();
    }, [])

    const getAllInstitute = () => {
        AcademyService.getAllInstitute().then((response) => {
            setInstitute(response.data)
            setCourse(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }



    

    const [data, setData] = useState({});

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();

        })
    }, [])

    function Course(instituteid) {
        console.log(instituteid)
        usenavigate('/user/enrollCourse/' + instituteid)
    }

    const logOut = () => {
        sessionStorage.clear()
        localStorage.clear();
        usenavigate('/');

    }

    return (
        <div className="area">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
            <ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStarp.Container>
                    <ReactBootStarp.Navbar.Brand href="/user/dashboard">PG_Admission</ReactBootStarp.Navbar.Brand>
                    <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStarp.Nav className="me-auto">
                            <ReactBootStarp.Nav.Link href="/user/viewInstitute">Institute</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link href="/user/enrolledCourse">Enrolled Courses</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link href="/user/news">News Feed</ReactBootStarp.Nav.Link>
                        </ReactBootStarp.Nav>
                        <ReactBootStarp.Nav>
                            <ReactBootStarp.NavDropdown title="More Info" id="collasible-nav-dropdown">
                                <ReactBootStarp.NavDropdown.Item href="/user/profile">Profile</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Item href="/user/help">Help&Support</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Item href="#action/3.3">About</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Divider />
                                <ReactBootStarp.NavDropdown.Item onClick={() => logOut()}>Logout</ReactBootStarp.NavDropdown.Item>
                            </ReactBootStarp.NavDropdown>
                        </ReactBootStarp.Nav>
                    </ReactBootStarp.Navbar.Collapse>
                </ReactBootStarp.Container>
            </ReactBootStarp.Navbar>
            <br></br>
            <div>
                <div class="container h-100">
                    <div class="d-flex justify-content-center h-100">
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
                    
                    institute.filter(institute => institute.institutename.toLowerCase().includes(query)).   map(
                        (institute,index)=>
                            <div>
                                <ReactBootStarp.Card>
                                    <ReactBootStarp.Card.Header className="gradient">Info : {institute.instituteid}</ReactBootStarp.Card.Header>
                                    <ReactBootStarp.Card.Body>
                                        <ReactBootStarp.Card.Title >Institute Name: {institute.institutename}</ReactBootStarp.Card.Title>
                                        <ReactBootStarp.Card.Text >Institute Description: {institute.institutedescription}</ReactBootStarp.Card.Text>
                                        <ReactBootStarp.Card.Text>Institute Address: {institute.instituteaddress}</ReactBootStarp.Card.Text>
                                        <ReactBootStarp.Card.Text>Institute MobileNo: {institute.mobile}</ReactBootStarp.Card.Text>
                                        <ReactBootStarp.Card.Text>Institute Email: {institute.email}</ReactBootStarp.Card.Text>
                                        <ReactBootStarp.Card.Text >Institute Email: {institute.course[0].coursename}</ReactBootStarp.Card.Text>
                                        
                                        <ReactBootStarp.Button variant="success" onClick={() => Course(institute.instituteid)}>Enroll Course</ReactBootStarp.Button>
                                        
                                    </ReactBootStarp.Card.Body>
                                </ReactBootStarp.Card>
                            </div>
                    )
                }
                 

            </div>
                





        </div>
    )
}

export default Institute;