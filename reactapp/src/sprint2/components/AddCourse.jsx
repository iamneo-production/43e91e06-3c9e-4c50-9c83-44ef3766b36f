import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import uniqueRandom from 'unique-random'
import UserService from '../service/UserService';
import '../styles/AddOrUpdateCourse.css'
export default function AddStudent() {
    const navigate = useNavigate();
    const[Students, setStudents] = useState([]);
    const [error, setError] = React.useState(null);
    const [CourseName, setCourseName] = useState("");
    const [CourseId, setCourseId] = useState("");
    const [InstituteName, setInstituteName] = useState("");
    const [InstituteId, setInstituteId] = useState("");
    const [CourseDescription, setCourseDescription] = useState("");
    const [CourseDuration, setCourseDuration] = useState("");
    const [academicYear, setAcademicYear] = useState("");
    const random = uniqueRandom(11111, 99999);
    const Reset = () => {
        setCourseName("");
        setCourseId("");
        setInstituteName("");
        setInstituteId("");
        setCourseDuration("");
        setAcademicYear("");
        setCourseDescription("");
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
   
    const checkUser = (Students) => {
        const user = Students.find(user => user.CourseName === CourseName );
        console.log(user);
        if (user) {
            return true
        } else {
            
            return false;
        }
    }

    const OnhandleSubmit = (e) => {
        e.preventDefault();
        
        if (CourseName === '' || InstituteName === ''|| InstituteId === '' || CourseDuration === '' || CourseDescription === '' || academicYear === '') {
            alert("please Fill the required fields");
            return;
        }

        if(checkUser(Students)){
            alert("Course already exists");
            return;
        }
        else{
            let userDetail = { "CourseName": CourseName, "InstituteName": InstituteName, "CourseId": CourseId, "InstituteId": InstituteId, "CourseDuration": CourseDuration, "CourseDescription": CourseDescription, "AcademicYear": academicYear};

            const req = {
                id: random(),
                ...userDetail
            }
            console.log(req);
            UserService.addStudent(req).then(navigate("/"));
            Reset();
        }

    }


    return (
        <div className='body'>
            <h2>Course Details</h2>
            <div id="std">
                <div className="input1">
                    <div className="textbox"><input type="text" id='CourseName' placeholder="enter Course name" value={CourseName} onChange={(e) => setCourseName(e.target.value)} /></div>
                    <div className="textbox"><input type="text" id='InstituteName' placeholder="enter Institute name" value={InstituteName} onChange={(e) => setInstituteName(e.target.value)} /></div>
                    
                </div>

                <div className="input2">
                    {/* <div className="textbox"><input type="text" id='CourseId' placeholder="enter CourseId " value={CourseId} onChange={(e) => setCourseId(e.target.value)} /></div> */}
                    <div className="textbox"><input type="text" id='InstituteId' placeholder="enter InstituteId" value={InstituteId} onChange={(e) => setInstituteId(e.target.value)} /></div>
                    <div className="textbox"><input type="text" id='CourseDescription' placeholder="enter CourseDescriptionr" value={CourseDescription} onChange={(e) => setCourseDescription(e.target.value)} /></div>
                </div>

                <div className="input3">
                    <div className="textbox"><input type="text" id='CourseDuration' placeholder="enter CourseDuration" value={CourseDuration} onChange={(e) => setCourseDuration(e.target.value)} /></div>
                    
                    <div className="textbox"><input type="text" id='AcademicYear' placeholder="AcademicYear" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} /></div>
                    
                </div>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                <button type="button" id="submit" onClick={OnhandleSubmit} >Submit</button>
                <button type="button" id="cancle" onClick={() => navigate(-1)} >Cancle</button>
            </div>
        </div>

    )
}
