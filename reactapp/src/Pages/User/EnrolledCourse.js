import { getByDisplayValue } from '@testing-library/react';
import React,{useState} from 'react';
import { useEffect } from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import {fetchUserData} from '../../Api/AuthenticationService';
import EnrollService from './EnrollService'





export const EnrolledCourse=(props)=>{
    const usenavigate = useNavigate();
    const[student,setStudent]=useState([])
    const {id} = useParams()
    console.log(student)
    useEffect(()=>{
        getById(id)
    },[])

    const getById = (id) =>{
        EnrollService.getById(id).then((response)=>{
            setStudent(response.data)
            console.log(student)
        }).catch(error=>{
            console.log(error)
        })
    }

    const getStudentById = () =>{
        EnrollService.getStudentById(student.studentid).then((response)=>{
            setStudent(response.data)
            console.log(student)
        }).catch(error=>{
            console.log(error)
        })
    }
    
    

    const deleteByStudentId=(studentid)=>{
        EnrollService.deleteStudentById(studentid).then((response)=>{
            getStudentById(student.studentid)
            alert("The Enrollment is deleted")
        }).catch(error=>{
            console.log(error)
        })
    }
    
    const [data,setData]=useState({});

    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data);
        }).catch((e)=>{
            localStorage.clear();
           
        })
    },[])

    function Update (studentid) {
        usenavigate('/user/editEnroll/'+studentid)
    } 

    const handleSubmit=(id)=>{
        usenavigate("/user/enrolledCourse/"+id)
    }

    const logOut=()=>{
        sessionStorage.clear()
        localStorage.clear();
        usenavigate('/');

    }

    return (
        <div className="area" >
            <ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <ReactBootStarp.Container>
        <ReactBootStarp.Navbar.Brand href="/user/dashboard">PG_Admission</ReactBootStarp.Navbar.Brand>
        <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStarp.Nav className="me-auto">
        <ReactBootStarp.Nav.Link href="/user/viewInstitute">Institute</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link onClick={()=>handleSubmit(data.id)}>Enrolled Courses</ReactBootStarp.Nav.Link>        
        <ReactBootStarp.Nav.Link href="/user/news">News Feed</ReactBootStarp.Nav.Link>
    </ReactBootStarp.Nav>
    <ReactBootStarp.Nav>
      <ReactBootStarp.NavDropdown title="More Info" id="collasible-nav-dropdown">
        <ReactBootStarp.NavDropdown.Item href="/user/profile">Profile</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Item href="/user/help">Help&Support</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Item href="#action/3.3">About</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Divider />
        <ReactBootStarp.NavDropdown.Item onClick={() =>logOut()}>Logout</ReactBootStarp.NavDropdown.Item>
        </ReactBootStarp.NavDropdown>
      </ReactBootStarp.Nav>
      </ReactBootStarp.Navbar.Collapse>
    </ReactBootStarp.Container>
    </ReactBootStarp.Navbar>



    <div>
            
            {
                student.map(student => (

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
                                    <ReactBootStarp.Button variant="danger" size="sl" type="submit" onClick={()=>deleteByStudentId(student.studentid)}>
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






        
        </div>
    )
}

export default EnrolledCourse;