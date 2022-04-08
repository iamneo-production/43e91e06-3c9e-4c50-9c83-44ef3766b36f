import React from 'react'
import * as ReactBootStarp from 'react-bootstrap';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddCourseAdmin() {
    const usenavigate = useNavigate()
    const[coursename,setCoursename]=useState('')
    const[courseDescription,setCourseDescription]=useState('')
    const[courseDuration,setCourseDuration]=useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const addcourse={coursename,courseDescription,courseDuration}
        console.log(addcourse)
        fetch("https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/course/addCourse" ,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(addcourse)
        }).then(()=>{
            usenavigate("/admin/courseadmin")
            console.log("New Course Added")
        })
    }

    const logOut=()=>{
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
        <ReactBootStarp.Nav.Link className="gradient" href="/admin/academyadmin">Academy</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link className="gradient active" href="/admin/courseadmin">Course</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link className="gradient" href="/admin/studentadmin">Students</ReactBootStarp.Nav.Link>
        
        <ReactBootStarp.Nav.Link className="gradient" href="/admin/news">News Feed</ReactBootStarp.Nav.Link>
    </ReactBootStarp.Nav>
    <ReactBootStarp.Nav>
      <ReactBootStarp.NavDropdown className="gradient" title="More Info" id="collasible-nav-dropdown">
        <ReactBootStarp.NavDropdown.Item href="/admin/Profile">Profile</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Item href="#action/3.2">Help&Support</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Item href="/admin/moreinfo">About</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Divider />
        <ReactBootStarp.NavDropdown.Item onClick={() =>logOut()}>LogOut</ReactBootStarp.NavDropdown.Item>
        </ReactBootStarp.NavDropdown>
      </ReactBootStarp.Nav>
      </ReactBootStarp.Navbar.Collapse>
    </ReactBootStarp.Container>
    </ReactBootStarp.Navbar>


    <div>
    <ReactBootStarp.Form>
    <ReactBootStarp.Row className="mb-3">
        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridEmail">
        <ReactBootStarp.Form.Label>CourseName</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control type="text" id="coursename" value={coursename}
            onChange={(e)=>setCoursename(e.target.value)} placeholder="Enter Course Name" />
        </ReactBootStarp.Form.Group>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridPassword">
        <ReactBootStarp.Form.Label>Course Duration</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control type="text" id="courseduration" value={courseDuration}
            onChange={(e)=>setCourseDuration(e.target.value)} placeholder="Years/Months" />
        </ReactBootStarp.Form.Group>
    </ReactBootStarp.Row>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="exampleForm.ControlTextarea1">
            <ReactBootStarp.Form.Label>Course Description</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control as="textarea" rows={3} id="coursedescription" value={courseDescription}
            onChange={(e)=>setCourseDescription(e.target.value)} placeholder="Description" />
        </ReactBootStarp.Form.Group>

        

        <div className="text-center">
            <ReactBootStarp.Button variant="success" size="lg" type="submit" onClick={handleClick} href="/admin/viewCourse">
                Submit
            </ReactBootStarp.Button>
        </div>
        </ReactBootStarp.Form>
    </div>














    </div>









  )
}

export default AddCourseAdmin