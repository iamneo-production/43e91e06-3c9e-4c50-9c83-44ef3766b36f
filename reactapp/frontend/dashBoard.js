import React from 'react';

import * as ReactBootStarp from 'react-bootstrap';

function AddAdmission()
{
    return(
            <div>
                <ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <ReactBootStarp.Container>
        <ReactBootStarp.Navbar.Brand href="/">Admission Management</ReactBootStarp.Navbar.Brand>
        <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStarp.Nav className="me-auto">
        <ReactBootStarp.Nav.Link href="/admin/addAdmission">Add Admission</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link href="/admin/viewAdmission">View Admission</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link href="/admin/editAdmission">Edit Admission</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link href="/admin/deleteAdmission">Delete Admission</ReactBootStarp.Nav.Link>
    </ReactBootStarp.Nav>
    </ReactBootStarp.Navbar.Collapse>
    </ReactBootStarp.Container>
    </ReactBootStarp.Navbar>
            </div>
    )
}
export default AddAdmission;