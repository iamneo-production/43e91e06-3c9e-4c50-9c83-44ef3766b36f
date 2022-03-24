import { Table, TableHead, TableBody, TableContainer, TableRow, Paper, styled, TableCell, tableCellClasses } from '@mui/material'
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import '../styles/DisplayUser.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        background:'transparent',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function DisplayUser(props) {
    const navigate = useNavigate();
    
    const editStudent = (id) => {
        console.log(id);
        navigate(`/admin/editStudent/${id}`);
    }
    
    const DeleteHandler =(id)=>{
        props.deleteStudent(id);
    }
    
    const viewStudent = (id) => {
        console.log(id);
        navigate(`/admin/viewDetailsStudent/${id}`);

    }



    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Email Id</StyledTableCell>
                            <StyledTableCell align="left">Enrolled Courses</StyledTableCell>
                            <StyledTableCell align="left">Phone Number</StyledTableCell>
                            <StyledTableCell align='right'>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.Student.map((student) => (
                            <StyledTableRow key={student.id}>
                                <StyledTableCell component="th" scope="row">
                                    {student.id}
                                </StyledTableCell>
                                <StyledTableCell align="left" >{student.firstName}</StyledTableCell>
                                <StyledTableCell align="left">{student.emailId}</StyledTableCell>
                                <StyledTableCell align="left">{student.enrolledCourse}</StyledTableCell>
                                <StyledTableCell align="left">{student.mobileNo}</StyledTableCell>
                                <StyledTableCell align='right'>
                                    <abbr title='Update Student' ><button onClick={() => editStudent(student.id)}><EditIcon style={{ fontSize: "18px" }} /></button></abbr>
                                    <abbr title="Delete Student"><button onClick={() => DeleteHandler(student.id)}> <DeleteOutlineTwoToneIcon style={{ fontSize: "18px" }} /> </button></abbr>
                                    <abbr title="View Details"><button onClick={() => viewStudent(student.id)} > <ArticleIcon style={{ fontSize: "18px" }} /> </button></abbr>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
