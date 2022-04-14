import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as ReactBootStarp from 'react-bootstrap';
import './AddOrUpdateStudent.css'


export default function AddStudent() {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, SetGender] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [emailid, setEmailId] = useState("");
    const [age, setAge] = useState("");
    const [phoneNo, setMobileNo] = useState("");
    const [alternateMobileNo, setAlternateMobileNo] = useState("");
    const [houseNo,sethouseNo] = useState("");
    const [streetName, setstreetName] = useState("");
    const [areaName, setareaName] = useState("");
    const [dateOfBirth,setDateOfBirth] = useState("")
    const [pincode, setpinCode] = useState("");
    const [state, setstate] = useState("");
    const [nationality, setNationality] = useState("");
    const usenavigate = useNavigate();

    const handleClick=(e)=>{
        e.preventDefault()
        const Student={firstName,lastName,gender,fatherName,phoneNo,alternateMobileNo,motherName,emailid,age,houseNo,streetName,areaName,pincode,state,nationality}
        console.log(Student)
        fetch("https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/student/addStudent" ,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Student)
        }).then(()=>{
            console.log("New Student Added")
            console.log(firstName);
        })
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
            <div id="std" className='font'>
                <div className="input1">
                    <div className="textbox"><input type="text" id='firstName' placeholder="enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></div>
                    <div className="textbox"><input type="text" id='lastName' placeholder="enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>
                    <div className="textbox">
                        <label htmlFor="male/female">Gender Type : </label>
                        <select id="male/female" className='Gender' value={gender} onChange={(e) => SetGender(e.target.value)}>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="NotDisclose">Not Disclose</option>
                        </select>
                    </div>
                </div>

                <div className="input2">
                    <div className="textbox"><input type="text" id='fatherName' placeholder="enter father name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} /></div>
                    <div className="textbox"><input type="tel" id='phoneNumber1' placeholder="enter mobile number" value={phoneNo} onChange={(e) => setMobileNo(e.target.value)} /></div>
                    <div className="textbox"><input type="tel" id='phoneNumber2' placeholder="enter alternate mobile number" value={alternateMobileNo} onChange={(e) => setAlternateMobileNo(e.target.value)} /></div>
                </div>

                <div className="input3">
                    <div className="textbox"><input type="text" id='motherName' placeholder="enter mother name" value={motherName} onChange={(e) => setMotherName(e.target.value)} /></div>
                    <div className="textbox">
                        <label htmlFor='DOB'>Date Of Birth :</label>
                        <input type="date" id='DOB' placeholder="enter Date Of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} /></div>
                    <div className="textbox"><input type="number" id='age' placeholder="enter age" value={age} onChange={(e) => setAge(e.target.value)} /></div>
                    <div className="textbox"><input type="email" id='emailId' placeholder="enter email id" value={emailid} onChange={(e) => setEmailId(e.target.value)} /></div>
                </div>
            </div>
            <div className="input4">
                <label>Address Infrmation:</label>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="houseNo">House No:</label></td>
                            <td><input type="text" id="houseNo" name='houseNo' value={address.houseNo} onChange={(e) => onChangeAddress(e)} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="streetName">Street Name:</label></td>
                            <td><input type="text" id="streetName" name='streetName' value={address.streetName} onChange={(e) => onChangeAddress(e)} /></td>

                        </tr>
                        <tr>
                            <td><label htmlFor="areaName">Area Name:</label></td>
                            <td><input type="text" id="areaName" name='areaName' value={address.areaName} onChange={(e) => onChangeAddress(e)} /></td>

                            <td><label htmlFor="pincode">Pincode:</label></td>
                            <td><input type="text" id="pincode" name='pinCode' value={address.pinCode} onChange={(e) => onChangeAddress(e)} /></td>

                        </tr>
                        <tr>
                            <td><label htmlFor="state">State:</label></td>
                            <td><input type="text" id="state" name='state' value={address.state} onChange={(e) => onChangeAddress(e)} /></td>

                            <td><label htmlFor="nationality">Nationality:</label></td>
                            <td><input type="text" id="nationality" name='Nationality' value={address.Nationality} onChange={(e) => onChangeAddress(e)} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                <button type="button" id="submit" onClick={OnhandleSubmit} >Submit</button>
                <button type="button" id="cancle" onClick={() => navigate(-1)} >Cancle</button>
            </div>
        </div>

    )
}
