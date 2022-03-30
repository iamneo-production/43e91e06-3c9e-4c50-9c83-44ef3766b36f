import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import UserService from '../service/UserService';
import '../styles/AddOrUpdateStudent.css'
export default function AddStudent() {
    const navigate = useNavigate();
    const [Students, setStudents] = useState([]);
    const [error, setError] = React.useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [age, setAge] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [alternateMobileNo, setAlternateMobileNo] = useState("");
    const [gender, SetGender] = useState("");
    const [address, setAddress] = useState({
        houseNo: "",
        streetName: "",
        areaName: "",
        pinCode: "",
        state: "",
        Nationality: "",

    })
    const Reset = () => {
        setFirstName("");
        setLastName("");
        setFatherName("");
        setMotherName("");
        setDateOfBirth("");
        setAge("");
        setAlternateMobileNo("");
        setMobileNo("");
        setEmailId("");
        SetGender("");
        setAddress({
            houseNo: "",
            streetName: "",
            areaName: "",
            pinCode: "",
            state: "",
            Nationality: "",
        });
    }
    useEffect(() => {
        const getStudent = async () => {
            UserService.getStudents().then((res) => {
                setStudents(res.data);
            }).catch(error => {
                setError(error);
            })
        }
        getStudent()
    }, []);

    if (error) {
        return (`Error ${error}`)
    }

    const onChangeAddress = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    }
    const checkUser = (Students) => {
        const user = Students.find(user => user.emailId === emailId || user.mobileNo === mobileNo);
        console.log(user);
        if (user) {
            return true
        } else {

            return false;
        }
    }

    const OnhandleSubmit = (e) => {
        e.preventDefault();

        if (firstName === '' || lastName === '' || fatherName === '' | emailId === '' || dateOfBirth === '' || mobileNo === '' || gender === '' || motherName === '' || address.pinCode === '') {
            alert("please Fill the required fields");
            return;
        }

        if (checkUser(Students)) {
            alert("user already exists");
            return;
        }
        else {
            let userDetail = { "firstName": firstName, "lastName": lastName, "fatherName": fatherName, "motherName": motherName, "emailId": emailId, "dateOfBirth": dateOfBirth, "age": age, "mobileNo": mobileNo, "alternateMobileNo": alternateMobileNo, "gender": gender, "address": address };

            const req = {
                ...userDetail
            }
            console.log(req);
            UserService.addStudent(req).then(navigate("/"));
            Reset();
        }

    }


    return (
        <div className='body'>
            <h2>User Details</h2>
            <div id="std">
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
                    <div className="textbox"><input type="tel" id='phoneNumber1' placeholder="enter mobile number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} /></div>
                    <div className="textbox"><input type="tel" id='phoneNumber2' placeholder="enter alternate mobile number" value={alternateMobileNo} onChange={(e) => setAlternateMobileNo(e.target.value)} /></div>
                </div>

                <div className="input3">
                    <div className="textbox"><input type="text" id='motherName' placeholder="enter mother name" value={motherName} onChange={(e) => setMotherName(e.target.value)} /></div>
                    <div className="textbox">
                        <label htmlFor='DOB'>Date Of Birth :</label>
                        <input type="date" id='DOB' placeholder="enter Date Of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} /></div>
                    <div className="textbox"><input type="number" id='age' placeholder="enter age" value={age} onChange={(e) => setAge(e.target.value)} /></div>
                    <div className="textbox"><input type="email" id='emailId' placeholder="enter email id" value={emailId} onChange={(e) => setEmailId(e.target.value)} /></div>
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
