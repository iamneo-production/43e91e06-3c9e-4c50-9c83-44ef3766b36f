import React, {  useEffect, useState } from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Service from '../services/Service';


const EditAdmission = () =>
{
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[gender,setGender]=useState('')
    const[fatherName,setFatherName]=useState('')
    const[motherName,setMotherName]=useState('')
    const[emailid,setEmailid]=useState('')
    const[age,setAge]=useState('')
    const[phoneNo,setPhoneNo]=useState('')
    const[alternateNo,setAlternateNo]=useState('')
    const[houseNo,setHouseNo]=useState('')
    const[streetName,setStreetName]=useState('')
    const[areaName,setAreaName]=useState('')
    const[pincode,setPincode]=useState('')
    const[state,setState]=useState('')
    const[nationality,setNationality]=useState('')
    const navigate=useNavigate();
    const{id}=useParams();

    // const[data,setData]=useState([])
    // useEffect((id)=>{
    //     getStudentByid(id);
    // })
   
    // const getStudentByid=(id)=>{
    //     fetch("http://localhost:8080/admission/getStudentByid="+id)
    //     .then(res=>res.json())
    //     .then((result)=>{
    //         setData(result)
    //     })
    // }
    
    
    

       const updatestudent=(e)=>{
            e.preventDefault();
            const student={
                firstName,
                lastName,
                gender,
                fatherName,
                motherName,
                emailid,
                age,
                phoneNo,
                alternateNo,
                houseNo,
                streetName,
                areaName,
                pincode,
                state,
                nationality};
                
            if(id){
            Service.updateStudentById(id,student).then((response)=>{
                navigate('/admin/viewAdmission')
            }).catch(error=>{
                console.log(error);
            })
          }
          else{
              Service.addStudent(student).then((response)=>{
                  console.log(response.data)
                  navigate('/admin/viewAdmission')
              }).catch(error=>{
                console.log(error);
            })
          }
        }
        
        useEffect(()=>{
            Service.getStudentById(id).then((response)=>{
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setGender(response.data.gender)
                setFatherName(response.data.fatherName)
                setMotherName(response.data.motherName)
                setEmailid(response.data.emailid)
                setAge(response.data.age)
                setPhoneNo(response.data.phoneNo)
                setAlternateNo(response.data.alternateNo)
                setHouseNo(response.data.houseNo)
                setStreetName(response.data.streetName)
                setAreaName(response.data.areaName)
                setPincode(response.data.pincode)
                setState(response.data.state)
                setNationality(response.data.nationality)
            }).catch(error=>{
                console.log(error)
            })
        },[id])
    
    
    return(
        <div>
           <Dashboard/>   
          <ReactBootStarp.Form>
          <ReactBootStarp.Row className="mb-3">
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridFirstName">
              <ReactBootStarp.Form.Label>First Name</ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="text" id="coursename" value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter First Name" />
              </ReactBootStarp.Form.Group>
      
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridLastName">
              <ReactBootStarp.Form.Label>Last Name</ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="text" id="courseduration" value={lastName}
                  onChange={(e)=>setLastName(e.target.value)} placeholder="Enter LastName" />
              </ReactBootStarp.Form.Group>

              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridGender">
              <ReactBootStarp.Form.Label>Gender</ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="gender" id="courseduration" value={gender}
                  onChange={(e)=>setGender(e.target.value)} placeholder="Gender" />
              </ReactBootStarp.Form.Group>
              </ReactBootStarp.Row>

              <ReactBootStarp.Row className="mb-3">
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridFatherName">
              <ReactBootStarp.Form.Label>Father Name</ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="text" id="coursename" value={fatherName}
                  onChange={(e)=>setFatherName(e.target.value)} placeholder="Enter Father Name" />
              </ReactBootStarp.Form.Group>
      
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridMobileNumber">
              <ReactBootStarp.Form.Label>Phone Number</ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="phonenumber" id="courseduration" value={phoneNo}
                  onChange={(e)=>setPhoneNo(e.target.value)} placeholder="Enter Phone Number" />
              </ReactBootStarp.Form.Group>

              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridAlternateMobilenumber">
              <ReactBootStarp.Form.Label>Alternate Number</ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="phonenumber" id="courseduration" value={alternateNo}
                  onChange={(e)=>setAlternateNo(e.target.value)} placeholder="Enter Alternate Number" />
              </ReactBootStarp.Form.Group>

              </ReactBootStarp.Row>
              <ReactBootStarp.Row className="mb-3">
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridMothertName">
              <ReactBootStarp.Form.Label>Mother Name</ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="text" id="coursename" value={motherName}
                  onChange={(e)=>setMotherName(e.target.value)} placeholder="Enter Mother Name" />
              </ReactBootStarp.Form.Group>
      
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridEmail">
              <ReactBootStarp.Form.Label>Email Id</ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="email" id="courseduration" value={emailid}
                  onChange={(e)=>setEmailid(e.target.value)} placeholder="Enter EmailId" />
              </ReactBootStarp.Form.Group>

              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridAge">
              <ReactBootStarp.Form.Label>Age</ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="number" id="courseduration" value={age}
                  onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" />
              </ReactBootStarp.Form.Group>
              </ReactBootStarp.Row>
              
              <ReactBootStarp.Row className="mb-3">
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridAddress">
              <ReactBootStarp.Form.Label>Address Information</ReactBootStarp.Form.Label>
                  <ReactBootStarp.Row className="mb-3">
                  <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridHouseNumber">
                  <ReactBootStarp.Form.Label>House No</ReactBootStarp.Form.Label>
                      <ReactBootStarp.Form.Control type="text" id="courseduration" value={houseNo}
                      onChange={(e)=>setHouseNo(e.target.value)} placeholder="House No" />
                  </ReactBootStarp.Form.Group>
                  <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridStreetName">
                  <ReactBootStarp.Form.Label>Street Name</ReactBootStarp.Form.Label>
                      <ReactBootStarp.Form.Control type="text" id="courseduration" value={streetName}
                      onChange={(e)=>setStreetName(e.target.value)} placeholder="StreetName" />
                  </ReactBootStarp.Form.Group>
                  </ReactBootStarp.Row>
                  <ReactBootStarp.Row className="mb-3">
                  <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridAreaName">
                  <ReactBootStarp.Form.Label>Area Name</ReactBootStarp.Form.Label>
                      <ReactBootStarp.Form.Control type="text" id="courseduration" value={areaName}
                      onChange={(e)=>setAreaName(e.target.value)} placeholder="Area Name" />
                  </ReactBootStarp.Form.Group>
                  <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridPincode">
                  <ReactBootStarp.Form.Label>Pincode</ReactBootStarp.Form.Label>
                      <ReactBootStarp.Form.Control type="number" id="courseduration" value={pincode}
                      onChange={(e)=>setPincode(e.target.value)} placeholder="Pincode" />
                  </ReactBootStarp.Form.Group>
                  </ReactBootStarp.Row>
                  <ReactBootStarp.Row className="mb-3">
                  <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridState">
                  <ReactBootStarp.Form.Label>State</ReactBootStarp.Form.Label>
                      <ReactBootStarp.Form.Control type="text" id="courseduration" value={state}
                      onChange={(e)=>setState(e.target.value)} placeholder="State" />
                  </ReactBootStarp.Form.Group>
                  <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridNationality">
                  <ReactBootStarp.Form.Label>Nationality</ReactBootStarp.Form.Label>
                      <ReactBootStarp.Form.Control type="text" id="courseduration" value={nationality}
                      onChange={(e)=>setNationality(e.target.value)} placeholder="Nationality" />
                  </ReactBootStarp.Form.Group>
                  </ReactBootStarp.Row>
              </ReactBootStarp.Form.Group>
              </ReactBootStarp.Row> 

            <div className="text-center">
            <ReactBootStarp.Button variant="success" size="lg" type="submit" onClick={(e)=>updatestudent(e)}>
                Update
            </ReactBootStarp.Button>
            </div>
              </ReactBootStarp.Form>
          </div>
    )
  }

export default EditAdmission;