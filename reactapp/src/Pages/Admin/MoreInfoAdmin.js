import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './MoreInfo.css'
import * as ReactBootStarp from 'react-bootstrap';
import { fetchUserData } from '../../Api/AuthenticationService';
import {useState} from 'react'

function MoreInfo() {
    const usenavigate = useNavigate();
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
    
    const logOut = () => {
        sessionStorage.clear()
        localStorage.clear();
        usenavigate('/');

    }

    return (
        <div className='area'><ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactBootStarp.Container>
                <ReactBootStarp.Navbar.Brand href="/admin/dashboard">PG_Admission</ReactBootStarp.Navbar.Brand>
                <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStarp.Nav className="me-auto">
                        <ReactBootStarp.Nav.Link className="gradient" href="/admin/academyadmin">Academy</ReactBootStarp.Nav.Link>
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

            <div id="wrapper">
                <div id="container">

                    <section class="open-book">

                        <article>

                            <h2 class="chapter-title">Team Name : B1JR36</h2>
                            <p>
                                This WebPage Is All About To Give Complete Satisfaction For The User To Get A Satisfied Admission
                            </p>
                            <p>
                                Our Team Consists Of A Nine Developers To Give You A Satisfied Content On Pg Admission And Modern Pages
                            </p>
                            <p>
                                Our Team Members Name Are :
                            </p>
                            <p>
                                Vasanth
                            </p>
                            <p>
                                SasiKumar
                            </p>
                            <p>
                                Shivani
                            </p>
                            <div className='arrange'>
                                <p>
                                    Swetha
                                </p>

                                <p>
                                    Soumik
                                </p>
                                <p>
                                    Somesh
                                </p>
                                <p>
                                    Tulasi
                                </p>
                                <p>
                                    Jayanth
                                </p>
                                <p>
                                    Nagavarshith
                                </p>

                                <dl>
                                    <dt><strong>And&bull;We&bull;Got&bull;Our&bull;Mentor</strong></dt>
                                    <dd>
                                        <em>Ms Mohana Priya Subramaniyam</em><br></br>
                                        She Helped A Lot When We Stuck Under A Complexity Situation To Overcome And She Trained How To Start Development Where To Start And Everything
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><strong>And&bull;We&bull;Got&bull;Our&bull;BA</strong></dt>
                                    <dd>
                                        <em>Mr Sandeep</em><br></br>
                                        He Helped A Lot Like Our Mente He Helped Us To Make New Features And He Made Us Understand How Every System Works
                                    </dd>
                                </dl>
                            </div>

                        </article>
                        
                    </section>
                </div>
            </div>






        </div>

    )
}

export default MoreInfo;