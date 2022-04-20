import React from 'react'
import * as ReactBootStarp from 'react-bootstrap';
import '../Style.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUserData } from '../../Api/AuthenticationService';
import { useEffect } from 'react';
import EnrollService from './StudentServiceAdmin';

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
    const{studentid}=useParams();
    console.log(id)



    useEffect(()=>{
        setId(data.id)
    })

    useEffect(()=>{
        if(data.username==="undefined"){
            localStorage.clear();
            usenavigate('/')
        }
    },)

    const handleSubmit=(id)=>{
        usenavigate("/admin/enrolledCourse/"+id)
    }

    const UpdateEnroll = (e) => {
        e.preventDefault();
        const editStudent = { studentName, studentDoB, address, mobile, sslc, hsc, diploma, eligibility, id, courseid, coursename,instituteid,institutename }
        if(studentid){
            EnrollService.updateStudent(studentid,editStudent).then((response)=>{
                usenavigate("/admin/studentadmin")
            }).catch((error)=>{
                console.log(error)
            })
        }else{
            EnrollService.addStudent(editStudent).then((response)=>{
                console.log(response.data)
            }).catch(error=>{
                console.log(error)
            })
        }
        
    }


    React.useEffect(() => {
        fetchUserData().then((response) => {
            
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();

        })
    }, [])

    useEffect(()=>{
        EnrollService.getStudentById(studentid).then((response)=>{
            setStudentName(response.data.studentName)
            setStudentDoB(response.data.studentDoB)
            setAddress(response.data.address)
            setMobile(response.data.mobile)
            setSslc(response.data.sslc)
            setHsc(response.data.hsc)
            setDiploma(response.data.diploma)
            setEligibility(response.data.eligibility)
        }).catch(error=>{
            console.log(error)
        })
    },[])




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
                                <ReactBootStarp.NavDropdown.Item onClick={() => logOut()}>Logout</ReactBootStarp.NavDropdown.Item>
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
                            <button type="button" id="submit" onClick={(e)=>UpdateEnroll(e)}>Submit</button>
                            
                        </div>
                    </ReactBootStarp.Card.Body>
                </ReactBootStarp.Card>
            </div>
        </div>
    )
}

export default Enrolldetail;