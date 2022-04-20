import React, { useState, useEffect } from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Service from '../services/Service';

const ViewAdmission = () => {
    const navigate = useNavigate();
    

    
   

    return (
        <div>
            <Dashboard />
            {
                students.map(student => (

                    <div>
                        <ReactBootStarp.Card>
                            <ReactBootStarp.Card.Header>Student Id : {student.id}</ReactBootStarp.Card.Header>
                            <ReactBootStarp.Card.Body>
                                <ReactBootStarp.Card.Title>Student Name: {student.firstName} {student.lastName}</ReactBootStarp.Card.Title>
                                <ReactBootStarp.Card.Text>Enrolled Course: </ReactBootStarp.Card.Text>
                                <ReactBootStarp.Card.Text>Mobile Number: {student.phoneNo}</ReactBootStarp.Card.Text>
                                <div>
                                    <ReactBootStarp.Button variant="success" size="sl" type="submit" >
                                        Edit Admission
                                    </ReactBootStarp.Button>
                                </div>
                                <div className='text-center'>
                                    <ReactBootStarp.Button variant="success" size="sl" type="submit" >
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

    )
}
export default ViewAdmission;