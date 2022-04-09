import React from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import './Home.css'

function Home() {
    return (
        <div className="area">
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
            <ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStarp.Container>
                    <ReactBootStarp.Navbar.Brand href="/">PhD Admission Portal</ReactBootStarp.Navbar.Brand>
                    <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStarp.Nav className="me-auto">
                            <ReactBootStarp.Nav.Link className="gradient" href="/admin/login">Login</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link className="gradient" href="/admin/mailer">Sign-up</ReactBootStarp.Nav.Link>

                        </ReactBootStarp.Nav>

                    </ReactBootStarp.Navbar.Collapse>
                </ReactBootStarp.Container>
            </ReactBootStarp.Navbar>

            <div>

                <div class="logo">
                    <div class="square">
                        <div class="shooting_star"></div>
                        <div class="shooting_star"></div>
                        <div class="shooting_star"></div>

                        <div class="starfield"></div>
                        <div class="starfield"></div>
                        <div class="planet"></div>

                        <div class="clouds">
                            <div class="clouds_background"></div>
                            <div class="clouds_background"></div>
                            <div class="clouds_background"></div>
                            <div class="clouds_background"></div>

                            <div class="clouds_mid cloudmid1"></div>
                            <div class="clouds_mid cloudmid2"></div>
                            <div class="clouds_mid cloudmid3"></div>
                            <div class="clouds_mid cloudmid4"></div>
                            <div class="clouds_mid cloudmid5"></div>

                            <div class="clouds_foreground cloudforeground1"></div>
                            <div class="clouds_foreground cloudforeground2"></div>
                            <div class="clouds_foreground cloudforeground3"></div>
                            <div class="clouds_foreground cloudforeground4"></div>
                            <div class="clouds_foreground cloudforeground5"></div>
                            <div class="clouds_foreground cloudforeground6"></div>
                            <div class="clouds_foreground cloudforegroundbase"></div>
                        </div>
                        <div class="moon">
                            <div class="crator crator1"></div>
                            <div class="crator crator2"></div>
                            <div class="crator crator3"></div>
                        </div>
                        <div class="shooting_star"></div>
                        <div class="shooting_star"></div>
                        <div class="outline"></div>

                    </div>
                </div>

            </div>

            <div class="wrapper">
                <div class="container">
                    <h1>Team Name:B1JR36</h1>
                </div>
            </div>





        </div>
    )
}

export default Home;