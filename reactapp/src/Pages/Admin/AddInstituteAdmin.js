import React from 'react'
import * as ReactBootStarp from 'react-bootstrap';
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../../Api/AuthenticationService';

function AddInstituteAdmin() {
    const usenavigate = useNavigate()
    const[institutename,setInstitutename]=useState('')
    const[institutedescription,setInstitutedescription]=useState('')
    const[instituteaddress,setInstituteaddress]=useState('')
    const[mobile,setMobile]=useState('')
    const[email,setEmail]=useState('')

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

    const handleClick=(e)=>{
        e.preventDefault()
        const addinstitute={institutename,institutedescription,instituteaddress,mobile,email}
        console.log(addinstitute)
        fetch("https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/institute/addInstitute" ,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(addinstitute)
        }).then(()=>{
            usenavigate('/admin/academyadmin')
            console.log("New Institute Added")
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
        <ReactBootStarp.Nav.Link className="gradient active" href="/admin/academyadmin">Academy</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link className="gradient" href="/admin/courseadmin">Course</ReactBootStarp.Nav.Link>
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
            <ReactBootStarp.Form.Control type="text" id="institutename" value={institutename}
            onChange={(e)=>setInstitutename(e.target.value)} placeholder="Enter Institute Name" />
        </ReactBootStarp.Form.Group>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridPassword">
        <ReactBootStarp.Form.Label>Institute Description</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control type="text" id="institutedescription" value={institutedescription}
            onChange={(e)=>setInstitutedescription(e.target.value)} placeholder="InstituteDescription" />
        </ReactBootStarp.Form.Group>
    </ReactBootStarp.Row>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="exampleForm.ControlTextarea1">
            <ReactBootStarp.Form.Label>Institute Address</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control as="textarea" rows={3} id="instituteaddress" value={instituteaddress}
            onChange={(e)=>setInstituteaddress(e.target.value)} placeholder="InstituteAddress" />
        </ReactBootStarp.Form.Group>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="exampleForm.ControlTextarea1">
            <ReactBootStarp.Form.Label>Mobile</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control as="textarea"  id="mobile" value={mobile}
            onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile" />
        </ReactBootStarp.Form.Group>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="exampleForm.ControlTextarea1">
            <ReactBootStarp.Form.Label>Email</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control as="textarea"  id="email" value={email}
            onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
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

export default AddInstituteAdmin