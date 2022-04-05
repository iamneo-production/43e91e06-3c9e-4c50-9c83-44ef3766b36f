import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserService from '../service/UserService';
import '../styles/AddOrUpdateCourse.css'

export default function EditStudent(props) {
    const param = useParams();
    const navigate = useNavigate();
    const [error, setError] = React.useState(null);
    
    const id = param.id;
    const [CourseName, setCourseName] = useState("");
    const [InstituteName, setInstituteName] = useState("");
    const [CourseId, setCourseId] = useState("");
    const [InstituteId, setInstituteId] = useState("");
    const [CourseDescription, setCourseDescription] = useState("");
    const [CourseDuration, setCourseDuration] = useState("");
    const [AcademicYear, setAcademicYear] = useState("");
    

    const Reset = () => {
        setCourseName("");
        setInstituteName("");
        setCourseId("");
        setInstituteId("");
        setCourseDescription("");
        setCourseDuration("");
        setAcademicYear("");
        
    }

    useEffect(() => {
        const getStudent = async () => {

            UserService.getByStudentId(id).then((res) => {
                let student = res.data;
                setCourseName(student.CourseName);
                setInstituteName(student.InstituteName);
                setCourseId(student.CourseId);
                setInstituteId(student.InstituteId);
                setCourseDescription(student.CourseDescription);
                setCourseDuration(student.CourseDuration);
                setAcademicYear(student.AcademicYear);
                

            }).catch(error => {
                setError(error);
            })
        }
        getStudent()
    }, [id]);

    if (error) {
        return (`Error ${error}`)
    }

    
    const OnhandleSubmit = (e) => {
        e.preventDefault();
        let userDetail = { "CourseName": CourseName, "InstituteName": InstituteName, "CourseId": CourseId, "InstituteId": InstituteId, "CourseDescription": CourseDescription,"CourseDuration":CourseDuration ,"AcademicYear": AcademicYear};

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
            <h2>Course Details</h2>
            <div id="std">
                <div className="input1">
                    <div className="textbox"><input type="text" id='editCourseName' placeholder="enter course name" value={CourseName} onChange={(e) => setCourseName(e.target.value)} /></div>
                    <div className="textbox"><input type="text" id='editInstituteName' placeholder="enter InstituteName" value={InstituteName} onChange={(e) => setInstituteName(e.target.value)} /></div>
                    
                </div>

                <div className="input2">
                    <div className="textbox"><input type="text" id='editCourseId' placeholder="enter CourseId" value={CourseId} onChange={(e) => setCourseId(e.target.value)} /></div>
                    <div className="textbox"><input type="text" id='editInstituteId' placeholder="enter InstituteId" value={InstituteId} onChange={(e) => setInstituteId(e.target.value)} /></div>
                    <div className="textbox"><input type="text" id='editCourseDescription' placeholder="enter CourseDescription" value={CourseDescription} onChange={(e) => setCourseDescription(e.target.value)} /></div>
                    
                </div>

                <div className="input3">
                    <div className="textbox"><input type="text" id='editCourseDuration' placeholder="enter CourseDuration" value={CourseDuration} onChange={(e) => setCourseDuration(e.target.value)} /></div>
                    <div className="textbox">
                        {/* <label htmlFor='DOB'>Date Of Birth :</label>
                        <input type="date" id='DOB'  placeholder="enter Date Of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} /></div> */}
                    <div className="textbox"><input type="text" id='editAcademicYear' placeholder="enter AcademicYear" value={AcademicYear} onChange={(e) => setAcademicYear(e.target.value)} /></div>
                    {/* <div className="textbox"><input type="email" id='editEmailId' placeholder="enter email id" value={emailId} onChange={(e) => setEmailId(e.target.value)} /></div> */}
                    </div>
                </div>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                <button type="button" id="submit" onClick={OnhandleSubmit} >Update</button>
                <button type="button" id="cancle" onClick={() => navigate("/")} >Cancle</button>
            </div>
        </div>

    )
}
