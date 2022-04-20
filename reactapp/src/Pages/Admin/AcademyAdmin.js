import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchUserData } from '../../Api/AuthenticationService';
import '../Style.css'
import AcademyService from './AcademyService'






const MainWrapper = styled.div`
    padding-top:40px;
`;

export const AcademyAdmin = (props) => {
    const usenavigate = useNavigate();
    const [institute, setInstitute] = useState([]);
    const [query, setQuery] = useState("");

    const onClick = () => {
        usenavigate("/admin/addInstitute")
    }

    useEffect(() => {
        getAllInstitute();
    }, [])

    useEffect(()=>{
        if(!localStorage.getItem("USER_KEY")){
            usenavigate('/admin/login')
        }
    })

    const getAllInstitute = () => {
        AcademyService.getAllInstitute().then((response) => {
            setInstitute(response.data)

            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteInstituteById = (instituteid) => {
        AcademyService.deleteInstituteById(instituteid).then((response) => {
            getAllInstitute();
            alert("The Institute Deleted SucessFully")
        }).catch(error => {
            console.log(error);
        })
    }

    function Update(instituteid) {
        console.log(instituteid)
        usenavigate('/admin/editInstitute/' + instituteid)
    }

    const [data, setData] = useState({});

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
                                <ReactBootStarp.NavDropdown.Item onClick={() => logOut()}>LogOut</ReactBootStarp.NavDropdown.Item>
                            </ReactBootStarp.NavDropdown>
                        </ReactBootStarp.Nav>
                    </ReactBootStarp.Navbar.Collapse>
                </ReactBootStarp.Container>
            </ReactBootStarp.Navbar>


            <br></br>
            <div>
                <div class="container h-100">
                    <div class="d-flex justify-content-center h-100">
                        <div className='buttonal'>
                            <button type="button" class="btn btn-primary" onClick={() => onClick()}>Add Academy</button>
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

                    institute.filter(institute => institute.institutename.toLowerCase().includes(query)).map(
                        institute =>
                            <div>
                                <ReactBootStarp.Card>
                                    <ReactBootStarp.Card.Header className="gradient">Info : {institute.instituteid}</ReactBootStarp.Card.Header>
                                    <ReactBootStarp.Card.Body>
                                        <ReactBootStarp.Card.Title >Institute Name: {institute.institutename}</ReactBootStarp.Card.Title>
                                        
                                        <div>Institute Description: {institute.institutedescription}</div>
                                        <br/>
                                        <div>Institute Address: {institute.instituteaddress}</div>
                                        <br/>
                                        <div>Institute MobileNo: {institute.mobile}</div>
                                        <br/>
                                        <div>Institute Email: {institute.email}</div>
                                        <br/>
                                        <ReactBootStarp.Button variant="success" onClick={() => Update(institute.instituteid)}>Update</ReactBootStarp.Button>
                                        <ReactBootStarp.Button className='mv' variant="danger" onClick={() => deleteInstituteById(institute.instituteid)}>
                                            Delete</ReactBootStarp.Button>

                                    </ReactBootStarp.Card.Body>
                                </ReactBootStarp.Card>
                            </div>
                    )
                }
            </div>


        </div>
    )
}

export default AcademyAdmin;