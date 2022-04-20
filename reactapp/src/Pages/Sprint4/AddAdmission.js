import React, { useState } from 'react';

import * as ReactBootStarp from 'react-bootstrap';
import Dashboard from '../dashboard/dashboard';
function AddAdmission()
{
    
   

    return(
        <div>
           <Dashboard/>   
          <ReactBootStarp.Form>
          <ReactBootStarp.Row className="mb-3">
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridFirstName">
              <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="text" id="coursename" value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter First Name" />
              </ReactBootStarp.Form.Group>
      
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridLastName">
              <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="text" id="courseduration" value={lastName}
                  onChange={(e)=>setLastName(e.target.value)} placeholder="Enter LastName" />
              </ReactBootStarp.Form.Group>

              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridGender">
              <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="gender" id="courseduration" value={gender}
                  onChange={(e)=>SetGender(e.target.value)} placeholder="Gender" />
              </ReactBootStarp.Form.Group>
              </ReactBootStarp.Row>

              <ReactBootStarp.Row className="mb-3">
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridFatherName">
              <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="text" id="coursename" value={fatherName}
                  onChange={(e)=>setFatherName(e.target.value)} placeholder="Enter Father Name" />
              </ReactBootStarp.Form.Group>
      
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridMobileNumber">
              <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="phonenumber" id="courseduration" value={phoneNo}
                  onChange={(e)=>setMobileNo(e.target.value)} placeholder="Enter Phone Number" />
              </ReactBootStarp.Form.Group>

              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridAlternateMobilenumber">
              <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="phonenumber" id="courseduration" value={alternateNo}
                  onChange={(e)=>setAlternateMobileNo(e.target.value)} placeholder="Enter Alternate Number" />
              </ReactBootStarp.Form.Group>

              </ReactBootStarp.Row>
              <ReactBootStarp.Row className="mb-3">
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridMothertName">
              <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="text" id="coursename" value={motherName}
                  onChange={(e)=>setMotherName(e.target.value)} placeholder="Enter Mother Name" />
              </ReactBootStarp.Form.Group>
      
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridEmail">
              <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="email" id="courseduration" value={emailid}
                  onChange={(e)=>setEmailId(e.target.value)} placeholder="Enter EmailId" />
              </ReactBootStarp.Form.Group>

              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridAge">
              <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                  <ReactBootStarp.Form.Control type="number" id="courseduration" value={age}
                  onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" />
              </ReactBootStarp.Form.Group>
              </ReactBootStarp.Row>
              
              <ReactBootStarp.Row className="mb-3">
              <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridAddress">
              <ReactBootStarp.Form.Label>Address Information</ReactBootStarp.Form.Label>
                  <ReactBootStarp.Row className="mb-3">
                  <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridHouseNumber">
                  <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                      <ReactBootStarp.Form.Control type="text" id="courseduration" value={houseNo}
                      onChange={(e)=>sethouseNo(e.target.value)} placeholder="House No" />
                  </ReactBootStarp.Form.Group>
                  <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridStreetName">
                  <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                      <ReactBootStarp.Form.Control type="text" id="courseduration" value={streetName}
                      onChange={(e)=>setstreetName(e.target.value)} placeholder="StreetName" />
                  </ReactBootStarp.Form.Group>
                  </ReactBootStarp.Row>
                  <ReactBootStarp.Row className="mb-3">
                  <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridAreaName">
                  <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                      <ReactBootStarp.Form.Control type="text" id="courseduration" value={areaName}
                      onChange={(e)=>setareaName(e.target.value)} placeholder="Area Name" />
                  </ReactBootStarp.Form.Group>
                  <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridPincode">
                  <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                      <ReactBootStarp.Form.Control type="number" id="courseduration" value={pincode}
                      onChange={(e)=>setpinCode(e.target.value)} placeholder="Pincode" />
                  </ReactBootStarp.Form.Group>
                  </ReactBootStarp.Row>
                  <ReactBootStarp.Row className="mb-3">
                  <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridState">
                  <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                      <ReactBootStarp.Form.Control type="text" id="courseduration" value={state}
                      onChange={(e)=>setstate(e.target.value)} placeholder="State" />
                  </ReactBootStarp.Form.Group>
                  <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridNationality">
                  <ReactBootStarp.Form.Label></ReactBootStarp.Form.Label>
                      <ReactBootStarp.Form.Control type="text" id="courseduration" value={nationality}
                      onChange={(e)=>setNationality(e.target.value)} placeholder="Nationality" />
                  </ReactBootStarp.Form.Group>
                  </ReactBootStarp.Row>
              </ReactBootStarp.Form.Group>
              </ReactBootStarp.Row> 

            <div className="text-center">
            <ReactBootStarp.Button variant="success" size="lg" type="submit" onClick={handleClick} href="/admin/viewAdmission">
                Add student
            </ReactBootStarp.Button>
            </div>
             
              
              </ReactBootStarp.Form>
          </div>
    )
}
export default AddAdmission;