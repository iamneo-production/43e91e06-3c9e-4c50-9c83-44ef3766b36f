import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserService from '../service/UserService';
import '../styles/AddOrUpdateStudent.css'

export default function EditStudent(props) {
    const param = useParams();
    const navigate = useNavigate();
    const [error, setError] = React.useState(null);
    const id = param.id;
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
        Nationality: ""
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

            UserService.getByStudentId(id).then((res) => {
                let student = res.data;
                setFirstName(student.firstName);
                setLastName(student.lastName);
                setFatherName(student.fatherName);
                setMotherName(student.motherName);
                setEmailId(student.emailId);
                setDateOfBirth(student.dateOfBirth);
                setAge(student.age);
                setMobileNo(student.mobileNo);
                setAlternateMobileNo(student.alternateMobileNo);
                SetGender(student.gender)
                setAddress({

                    houseNo: student.address.houseNo,
                    streetName: student.address.streetName,
                    areaName: student.address.areaName,
                    pinCode: student.address.pinCode,
                    state: student.address.state,
                    Nationality: student.address.Nationality
                })

            }).catch(Error => {
                setError(Error);
            })
        }
        getStudent()
    }, [id]);

    if (error) {
        return (`Error ${error}`)
    }

    const onChangeAddress = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    }
    const OnhandleSubmit = (e) => {
        e.preventDefault();
        let userDetail = { "firstName": firstName, "lastName": lastName, "fatherName": fatherName, "motherName": motherName, "emailId": emailId,"dateOfBirth":dateOfBirth ,"age": age, "mobileNo": mobileNo, "alternateMobileNo": alternateMobileNo, "gender": gender, "address": address };

        const req = {
            id: param,
            ...userDetail
        }
        UserService.editStudent(req, id).then(navigate("/"));
        console.log(userDetail);
        Reset();
    }


    return (
        <div className='body'>
            <h2>User Details</h2>
            <div id="std">
                <div className="input1">
                    <div className="textbox"><input type="text" id='editFirstName' placeholder="enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></div>
                    <div className="textbox"><input type="text" id='editLastName' placeholder="enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>
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
                    <div className="textbox"><input type="text" id='editFatherName' placeholder="enter father name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} /></div>
                    <div className="textbox"><input type="tel" id='editPhoneNumber1' placeholder="enter mobile number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} /></div>
                    <div className="textbox"><input type="tel" id='editPhoneNumber2' placeholder="enter alternate mobile number" value={alternateMobileNo} onChange={(e) => setAlternateMobileNo(e.target.value)} /></div>
                </div>

                <div className="input3">
                    <div className="textbox"><input type="text" id='editMotherName' placeholder="enter mother name" value={motherName} onChange={(e) => setMotherName(e.target.value)} /></div>
                    <div className="textbox">
                        <label htmlFor='DOB'>Date Of Birth :</label>
                        <input type="date" id='DOB'  placeholder="enter Date Of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} /></div>
                    <div className="textbox"><input type="number" id='editAge' placeholder="enter age" value={age} onChange={(e) => setAge(e.target.value)} /></div>
                    <div className="textbox"><input type="email" id='editEmailId' placeholder="enter email id" value={emailId} onChange={(e) => setEmailId(e.target.value)} /></div>
                </div>
            </div>
            <div className="input4">
                <label>Address Infrmation:</label>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="editHouseNo">House No:</label></td>
                            <td><input type="text" id="editHouseNo" name='houseNo' value={address.houseNo} onChange={(e) => onChangeAddress(e)} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="editStreetName">Street Name:</label></td>
                            <td><input type="text" id="editStreetName" name='streetName' value={address.streetName} onChange={(e) => onChangeAddress(e)} /></td>

                        </tr>
                        <tr>
                            <td><label htmlFor="editAreaName">Area Name:</label></td>
                            <td><input type="text" id="editAreaName" name='areaName' value={address.areaName} onChange={(e) => onChangeAddress(e)} /></td>

                            <td><label htmlFor="editPincode">Pincode:</label></td>
                            <td><input type="text" id="editPincode" name='pinCode' value={address.pinCode} onChange={(e) => onChangeAddress(e)} /></td>

                        </tr>
                        <tr>
                            <td><label htmlFor="editState">State:</label></td>
                            <td><input type="text" id="editState" name='state' value={address.state} onChange={(e) => onChangeAddress(e)} /></td>

                            <td><label htmlFor="editNationality">Nationality:</label></td>
                            <td><input type="text" id="editNationality" name='Nationality' value={address.Nationality} onChange={(e) => onChangeAddress(e)} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                <button type="button" id="submit" onClick={OnhandleSubmit} >Update</button>
                <button type="button" id="cancle" onClick={() => navigate("/")} >Cancle</button>
            </div>
        </div>

    )
}
