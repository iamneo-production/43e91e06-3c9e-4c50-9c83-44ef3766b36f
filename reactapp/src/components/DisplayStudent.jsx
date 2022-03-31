import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DisplayUser.css'

export default function DisplayStudent(props) {
    const navigate = useNavigate();

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
        <div>
            <table id='userData' sx={{ minWidth: 700 }}>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col' >Name</th>
                        <th scope='col'>Email Id</th>
                        <th scope='col' >Enrolled Courses</th>
                        <th scope='col' >Mobile Number </th>
                        <th scope='col' >Action </th>
                    </tr>
                </thead>
                <tbody>
                    {props.Student.map((Student) => (
                        <tr key={Student.id}>
                            <th scope='row'>{Student.id}</th>
                            <td>{Student.firstName}</td>
                            <td>{Student.emailId}</td>
                            <td>{Student.enrolledCourse}</td>
                            <td>{Student.mobileNo}</td>
                            <td><abbr title='Update Student' ><button onClick={() => editStudent(Student.id)}><i class="fa-solid fa-pen-to-square" style={{fontSize:"1rem"}}></i></button></abbr>
                                <abbr title="Delete Student"><button onClick={() => DeleteHandler(Student.id)}><i class="fa-solid fa-trash-can" style={{fontSize:"1rem"}}></i> </button></abbr>
                                <abbr title="View Details"><button onClick={() => viewStudent(Student.id)} ><i class="fa-solid fa-info" style={{fontSize:"1rem"}}></i></button></abbr>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
