import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import '../styles/DisplayCourse.css'


export default function DisplayUser(props) {
    const navigate = useNavigate();
    console.log(props.courses)
    const editStudent = (id) => {
        console.log(id);
        navigate(`/admin/editStudent/${id}`);
    }

    const DeleteHandler = (id) => {
        props.deleteStudent(id);
    }

    const viewStudent = (id) => {
        console.log(id);
        navigate(`/admin/viewDetailsStudent/${id}`);

    }



    return (
        <div id='ShowCourse'>
            {
                props.courses.map((course) => {
                    return (
                        <div class="card" key={course.id} >

                            <h2 style={{ textDecoration: "none" }}>Course Name : {course.CourseName}</h2>
                            <p class="price">CourseId: {course.CourseId}</p>
                            <p class="price">Institute Id : {course.InstituteId}</p>
                            <p class="price">Institute Name : {course.InstituteName}</p>
                            <p class="price">Course Description : {course.CourseDescription}</p>
                            <p class="price">Academic Year : {course.AcademicYear}</p>
                            <p class="price">Course Duration : {course.CourseDuration}</p>
                            <div id='btn'>
                                <button onClick={() => { editStudent(course.id) }}><EditIcon /></button>
                                <button onClick={() => { DeleteHandler(course.id) }}><DeleteOutlineTwoToneIcon /></button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
