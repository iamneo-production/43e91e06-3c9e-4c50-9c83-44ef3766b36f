import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';
import '../styles/ViewCourse.css';

export default function ViewStudent(props) {
    const param = useParams();
    const id = param.id;
    const navigate = useNavigate();
    const [error, setError] = React.useState(null);
    const [CourseName, setCourseName] = useState("");
    const [InstituteName, setInstituteName] = useState("");
    const [CourseId, setCourseId] = useState("");
    const [InstituteId, setInstituteId] = useState("");
    const [CourseDescription, setCourseDescription] = useState("");
    const [CourseDuration, setCourseDuration] = useState("");
    const [AcademicYear, setAcademicYear] = useState("");
    


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
    return (
        <div>
            <table id='CourseDetails'>
                <thead>
                    <tr>
                        <th scope='col'>Field</th>
                        <th scope='col'>Data</th>
                    </tr>
                </thead>
                <tbody>
                    
                <tr>
                        <td className='Field'>Course Id :</td>
                        <td className='data'>{id}</td>
                    </tr>
                    <tr>
                        <td className='Field'>Course Name : </td>
                        <td className='data'>{CourseName}</td>
                    </tr>
                    
                    <tr>
                        <td className='Field'>Institute Name</td>
                        <td className='data'>{InstituteName}</td>
                    </tr>
                    <tr>
                        <td className='Field'>CourseId</td>
                        <td className='data' >{CourseId}</td>
                    </tr>
                    <tr>
                        <td className='Field'>InstituteId</td>
                        <td className='data' >{InstituteId}</td>
                    </tr>
                    <tr>
                        <td className='Field'>CourseDescription :</td>
                        <td className='data'>{CourseDescription} </td>
                    </tr>
                    <tr>
                        <td className='Field'>CourseDuration :</td>
                        <td className='data'>{CourseDuration} </td>
                    </tr>
                    <tr>
                        <td className='Field'>AcademicYear :</td>
                        <td className='data'>{AcademicYear} </td>
                    </tr>
                    
                </tbody>
            </table>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin:'auto 10px' }} >
                <button type="button" id="Edit" onClick={()=>navigate(`/admin/editStudent/${id}`)} >Edit</button>
                <button type="button" id="Cancel" onClick={() => navigate(-1)} >Back</button>
            </div>
        </div>
    )
}
