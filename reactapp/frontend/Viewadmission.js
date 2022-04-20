import React, { useState, useEffect} from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Dashboard from './dashBoard';
import Service from '../frontend/Services/service';

const Viewadmission=()=>
{
    const navigate=useNavigate();
    const[students,setstudents]=useState([])
    useEffect(()=>{
        getAllStudents();
    },[])

    const getAllStudents=()=>{
        fetch("http://localhost:8080/admission/getAllStudents")
        .then(res=>res.json())
        .then((result)=>{
            setstudents(result)
        }).catch(error=>{
            console.log(error);
        })
    }
    const deleteStudentById = (id)=>{(
        Service.deleteStudentById(id).then((response)=>{
            getAllStudents();
        }).catch(error=>{
            console.log(error);

        })
        
    )}
    function Update(id)
    {
        console.log(id);
        navigate('/admin/editAdmission/'+id)
    }
    
    return(
        <div>
           <Dashboard/>
           {
            students.map(student=>(
                
              <div>
            <ReactBootStarp.Card>
            <ReactBootStarp.Card.Header>Student Id : {student.id}</ReactBootStarp.Card.Header>
            <ReactBootStarp.Card.Body>
            <ReactBootStarp.Card.Title>Student Name: {student.firstName} {student.lastName}</ReactBootStarp.Card.Title>
            <ReactBootStarp.Card.Text>Enrolled Course: </ReactBootStarp.Card.Text>
            <ReactBootStarp.Card.Text>Mobile Number: {student.phoneNo}</ReactBootStarp.Card.Text>
            <div>
            <ReactBootStarp.Button variant="success" size="sl" type="submit" onClick={()=>Update(student.id)}>
                Edit Admission
            </ReactBootStarp.Button>
            </div>
            <div className='text-center'>
            <ReactBootStarp.Button variant="success" size="sl" type="submit" onClick={()=>deleteStudentById(student.id)}>
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
export default Viewadmission;