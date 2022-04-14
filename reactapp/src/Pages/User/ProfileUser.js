import React, { useState } from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../../Api/AuthenticationService';
import '../Style.css'





export const Profile = (props) => {
    const usenavigate = useNavigate();

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

    const handleSubmit=(id)=>{
        usenavigate("/user/enrolledCourse/"+id)
    }

    return (
        <div className="area" >
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
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
                                <ReactBootStarp.NavDropdown.Item href="/user/moreinfo">About</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Divider />
                                <ReactBootStarp.NavDropdown.Item onClick={() => logOut()}>Logout</ReactBootStarp.NavDropdown.Item>
                            </ReactBootStarp.NavDropdown>
                        </ReactBootStarp.Nav>
                    </ReactBootStarp.Navbar.Collapse>
                </ReactBootStarp.Container>
            </ReactBootStarp.Navbar>


            <div class="container">
                <div class="row">
                    <div class="col-md-3 ">
                        <div class="list-group ">
                            <a href="#" class="list-group-item list-group-item-action ">Profile</a>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4>Your Profile</h4>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <form>
                                            <div class="form-group row">
                                                <label for="username" class="col-4 col-form-label">User Name*</label>
                                                <div class="col-8">
                                                    <input id="username" name="username" placeholder="Username" class="form-control here" value={data && `${data.email} `} required="required" type="text" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="email" class="col-4 col-form-label">Email*</label>
                                                <div class="col-8">
                                                    <input id="email" name="email" placeholder="Email" class="form-control here" value={data && `${data.username} `} required="required" type="text" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="phonenumber" class="col-4 col-form-label">Phonenumber*</label>
                                                <div class="col-8">
                                                    <input id="phonenumber" name="phonenumber" placeholder="PhoneNumber" class="form-control here" value={data && `${data.phonenumber} `} required="required" type="text" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="newpass" class="col-4 col-form-label">Role*</label>
                                                <div class="col-8">
                                                    <input id="newpass" name="newpass" placeholder="New Password" class="form-control here" value={"USER"} type="text" />
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Profile;