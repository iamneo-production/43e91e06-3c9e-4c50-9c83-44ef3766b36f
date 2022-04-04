import React from 'react'
import { useState } from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddCourseAdmin() {
    const usenavigate = useNavigate()
    const [instituteName,setInstituteName] = useState('')
    const [instituteDescription,setInstituteDescription] = useState('')
    const [instituteAddress,setInstituteAddress] = useState('')
    const [mobile,setMobile] = useState('')
    const [email,setEmail] = useState('')



    const logOut = () => {
        sessionStorage.clear()
        localStorage.clear();
        usenavigate('/');

    }




    return (
        <div className='area'>
            <ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStarp.Container>
                    <ReactBootStarp.Navbar.Brand href="/admin/dashboard">PG_Admission</ReactBootStarp.Navbar.Brand>
                    <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStarp.Nav className="me-auto">
                            <ReactBootStarp.Nav.Link className="gradient active" href="/admin/academyadmin">Academy</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link className="gradient" href="/admin/courseadmin">Course</ReactBootStarp.Nav.Link>
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
                <ReactBootStarp.Form>
                    <ReactBootStarp.Row className="mb-3">
                        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridEmail">
                            <ReactBootStarp.Form.Label>Institute Name</ReactBootStarp.Form.Label>
                            <ReactBootStarp.Form.Control type="text" placeholder="Enter Institute Name" />
                        </ReactBootStarp.Form.Group>

                        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridPassword">
                            <ReactBootStarp.Form.Label>Institute Description</ReactBootStarp.Form.Label>
                            <ReactBootStarp.Form.Control type="text" placeholder="InstituteDescription" />
                        </ReactBootStarp.Form.Group>
                    </ReactBootStarp.Row>

                    <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="exampleForm.ControlTextarea1">
                        <ReactBootStarp.Form.Label>Institute Address</ReactBootStarp.Form.Label>
                        <ReactBootStarp.Form.Control as="textarea" rows={3} placeholder="InstituteAddress" />
                    </ReactBootStarp.Form.Group>

                    <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="exampleForm.ControlTextarea1">
                        <ReactBootStarp.Form.Label>Mobile</ReactBootStarp.Form.Label>
                        <ReactBootStarp.Form.Control as="textarea" placeholder="Mobile" />
                    </ReactBootStarp.Form.Group>

                    <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="exampleForm.ControlTextarea1">
                        <ReactBootStarp.Form.Label>Email</ReactBootStarp.Form.Label>
                        <ReactBootStarp.Form.Control as="textarea" placeholder="Email" />
                    </ReactBootStarp.Form.Group>

                    <br></br>
                    <div className="text-center">
                        <ReactBootStarp.Button variant="success" className='custom-btn btn-3' size="lg" type="submit" href="/admin/viewCourse">
                            Submit
                        </ReactBootStarp.Button>
                    </div>
                </ReactBootStarp.Form>
            </div>














        </div>









    )
}

export default AddCourseAdmin