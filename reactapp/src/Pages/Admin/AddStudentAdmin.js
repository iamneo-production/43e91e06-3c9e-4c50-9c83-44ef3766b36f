import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import * as ReactBootStarp from 'react-bootstrap';
import './AddOrUpdateStudent.css';
import { fetchUserData } from '../../Api/AuthenticationService';


export default function AddStudent() {
    const [studentName, setStudentName] = useState("");
    const [gender, SetGender] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [emailid, setEmailId] = useState("");
    const [mobile, setMobileNo] = useState("");
    const [address, setAddress] = useState("");
    const [studentDoB, setStudentDob] = useState("");
    const [sslc, setSSLC] = useState("");
    const [hsc, setHSC] = useState("");
    const [diploma, setDiploma] = useState("");
    const [instituteid, setInstituteId] = useState("");
    const [institutename, setInstituteName] = useState("");
    const [courseid, setCourseId] = useState("");
    const [coursename, setCourseName] = useState("");
    const [id, setId] = useState("");
    const [eligibility, setElifibility] = useState("");


    const usenavigate = useNavigate();

    const [data, setData] = useState({});

    useEffect(() => {
        if (data.username === "undefined") {
            localStorage.clear();
            usenavigate('/')
        }
    })

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();

        })
    }, [])

    useEffect(() => {
        const getInstitute = async () => {
            await axios.get("https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/institute/" + instituteid).then((res) => {
                let Institute = res.data;
                setInstituteName(Institute.institutename);
            }).catch(err => {
                console.log(err);
            })
        }
        const getCourse = async () => {
            await axios.get("https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/course/" + courseid).then((res) => {
                setCourseName(res.data.coursename);
                setInstituteId(res.data.instituteid);
            }).catch(err => {
                console.log(err);
            })
        }
        getCourse();
        getInstitute();

    }, [courseid, data.id, instituteid])

    const handleClick = (e) => {
        e.preventDefault()
        const Student = { studentName, studentDoB, address, mobile, sslc, hsc, diploma, eligibility, instituteid, institutename, courseid, coursename, id }
        console.log(Student)
        fetch("https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/student/addStudent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Student)
        }).then(() => {
            console.log("New Student Added")
            console.log(studentName);

        })
        usenavigate('/admin/studentadmin');
    }


    const logOut = () => {
        sessionStorage.clear()
        localStorage.clear();
        usenavigate('/');

    }

    return (
        <div className='font'>

            <ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStarp.Container>
                    <ReactBootStarp.Navbar.Brand href="/admin/dashboard">PG_Admission</ReactBootStarp.Navbar.Brand>
                    <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStarp.Nav className="me-auto">
                            <ReactBootStarp.Nav.Link className="gradient " href="/admin/academyadmin">Academy</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link className="gradient" href="/admin/courseadmin">Course</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link className="gradient active" href="/admin/studentadmin">Students</ReactBootStarp.Nav.Link>

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

            <div id="std" className='font'>
                <div className="input1">
                    <div className="textbox"><input type="text" id='StudentName' placeholder="enter Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} /></div>
                    <td><label htmlFor="UserId">User Id:</label></td>
                    <td><input type="text" id="UserId" name='UserId' value={id} onChange={(e) => setId(e.target.value)} /></td>
                    <div className="textbox">
                        <label htmlFor='DOB'>Date Of Birth :</label>
                        <input type="date" id='DOB' placeholder="enter Date Of Birth" value={studentDoB} onChange={(e) => setStudentDob(e.target.value)} /></div>
                </div>
            </div>

            <div className="input2">

                <div className="textbox"><input type="tel" id='phoneNumber1' placeholder="enter mobile number" value={mobile} onChange={(e) => setMobileNo(e.target.value)} /></div>
            </div>

            <div className="input3">

                <div className="textbox">
                    <input type="text" id='ele' placeholder="Eligibility" value={eligibility} onChange={(e) => setElifibility(e.target.value)} />
                    <div className="textbox"><input type="text" id='address' placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} /></div>

                </div>
            </div>
            <div className="input4">
                <label>School Infrmation:</label>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="SSLC">SSLC </label></td>
                            <td><input type="text" id="SSLC" name='SSLC' value={sslc} onChange={(e) => setSSLC(e.target.value)} /></td>
                            <td><label htmlFor="HSC">HSC:</label></td>
                            <td><input type="text" id="HSC" name='HSC' value={hsc} onChange={(e) => setHSC(e.target.value)} /></td>

                        </tr>

                        <tr>
                            <td><label htmlFor="Diploma">Diploma</label></td>
                            <td><input type="text" id="Diploma" name='Diploma' value={diploma} onChange={(e) => setDiploma(e.target.value)} /></td>

                            <td><label htmlFor="CourseId">Course Id:</label></td>
                            <td><input type="text" id="CourseId" name='UserId' value={courseid} onChange={(e) => setCourseId(e.target.value)} /></td>

                            <td><label htmlFor="CourseName">Course Name:</label></td>
                            <td><input type="text" id="CourseName" name='CourseName' value={coursename} onChange={(e) => setCourseName(e.target.value)} disabled /></td>

                        </tr>
                        <tr>
                            <td><label htmlFor="InstituteId">Institute Id:</label></td>
                            <td><input type="text" id="InstituteId" name='InstituteId' value={instituteid} onChange={(e) => setInstituteId(e.target.value)} /></td>
                            <td><label htmlFor="InstituteName">Institute Name:</label></td>
                            <td><input type="text" id="InstituteName" name='InstituteName' value={institutename} onChange={(e) => setInstituteName(e.target.value)} disabled /></td>





                        </tr>

                    </tbody>
                </table>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                <button type="button" id="submit" onClick={(e) => handleClick(e)} >Submit</button>
                <button type="button" id="cancle" onClick={() => usenavigate(-1)} >Cancle</button>
            </div>
        </div>

    )
}
