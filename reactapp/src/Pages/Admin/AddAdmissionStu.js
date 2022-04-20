import React from 'react'
import * as ReactBootStarp from 'react-bootstrap';
import '../Style.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUserData } from '../../Api/AuthenticationService';
import { useEffect } from 'react';

function Enrolldetail() {
    const usenavigate = useNavigate();
    const [studentName, setStudentName] = useState('')
    const [studentDoB, setStudentDoB] = useState('')
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [sslc, setSslc] = useState('')
    const [hsc, setHsc] = useState('')
    const [diploma, setDiploma] = useState('')
    const [eligibility, setEligibility] = useState('')
    const [id, setId] = useState('')
    const { courseid } = useParams();
    const { coursename } = useParams();
    const {instituteid} = useParams();
    const{institutename}=useParams();
    const [data, setData] = useState({});

    console.log(id)



    useEffect(()=>{
        setId(data.id)
    },)

    const handleSubmit=(id)=>{
        usenavigate("/user/enrolledCourse/"+id)
    }

    const handleClick = (e) => {
        e.preventDefault();
        const addStudent = { studentName, studentDoB, address, mobile, sslc, hsc, diploma, eligibility, id, courseid, coursename,instituteid,institutename }
        console.log(addStudent)
        fetch("https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/student/addStudent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addStudent)
        }).then(() => {
            console.log("Student Enrolled")
            usenavigate("/admin/studentadmin")
        })
    }


    React.useEffect(() => {
        fetchUserData().then((response) => {
            
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();

        })
    }, [])




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
                <ReactBootStarp.Card>
                    <ReactBootStarp.Card.Body>
                        <ReactBootStarp.Card.Header className="gradient">Course Details</ReactBootStarp.Card.Header>
                        <div id="std">
                            <div className="input1">
                                <div className="textbox"><input type="text" id="studentName" value={studentName}
                                    onChange={(e) => setStudentName(e.target.value)} placeholder="enter Student Name" /></div>

                                <div className="textbox"><input type="text" id="studentDoB" value={studentDoB}
                                    onChange={(e) => setStudentDoB(e.target.value)} placeholder="enter Data Birth" /></div>


                            </div>

                            <div className="input2">

                                <div className="textbox"><input type="text" id="address" value={address}
                                    onChange={(e) => setAddress(e.target.value)} placeholder="enter Address" /></div>

                                <div className="textbox"><input type="text" id="mobile" value={mobile}
                                    onChange={(e) => setMobile(e.target.value)} placeholder="enter Mobile" /></div>
                            </div>

                            <div className="input3">

                                <div className="textbox"><input type="text" id="sslc" value={sslc}
                                    onChange={(e) => setSslc(e.target.value)} placeholder="enter sslc" /></div>

                                <div className="textbox"><input type="text" id="hsc" value={hsc}
                                    onChange={(e) => setHsc(e.target.value)} placeholder="Enter hsc" /></div>

                            </div>


                            <div className="input4">

                                <div className="textbox"><input type="text" id="diploma" value={diploma}
                                    onChange={(e) => setDiploma(e.target.value)} placeholder="enter diploma" /></div>

                                <div className="textbox"><input type="text" id="elgibility" value={eligibility}
                                    onChange={(e) => setEligibility(e.target.value)} placeholder="Enter Eligibilty" /></div>

                            </div>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                            <button type="button" id="submit" onClick={handleClick} href="/admin/viewCourse">Submit</button>
                            
                        </div>
                    </ReactBootStarp.Card.Body>
                </ReactBootStarp.Card>
            </div>
        </div>
    )
}

export default Enrolldetail;