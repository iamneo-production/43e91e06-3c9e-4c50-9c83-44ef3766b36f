import React, { useState, useEffect } from 'react'
import '../styles/AdminStudent.css'
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DisplayUser from './DisplayUser';

export default function AdminStudent(props) {
	const [error, setError] = React.useState(null);
	const [Student, setStudent] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [FilteredResults, setFilteredResults] = useState([]);
	const navigate = useNavigate();

	// const retriveStudents = async () => {
	//     const res = await api.get("/Students");
	//     return res.data;
	// }

	useEffect(() => {
		const getStudent = async () => {
			UserService.getStudents().then((res) => {
				setStudent(res.data);
			}).catch(error => {
				setError(error);
			})
		}
		getStudent()
	}, []);

	if (error) {
		return (`Error ${error}`)
	}
	if (!Student) {
		return ("No Student Data Available.")
	}

	const searchContactHandler = (item) => {

		item.preventDefault();
		if (searchInput !== '') {
			const filteredData = Student.filter((item) => {
				return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
			})
			setFilteredResults(filteredData);

		}
		else {
			setFilteredResults(Student)

		}

	}

	const deleteStudent = (id) => {
		console.log(id);
		UserService.deleteStudent(id).then(
			res => {
				setStudent(Student.filter(Student => Student.id !== id));
				setFilteredResults(FilteredResults.filter(Student => Student.id !== id));
			});

	}


	const addStudent = () => {
		navigate("/admin/addStudent");
	}

	return (
		<div className='DisplayUser'>
			<h1>User Details</h1>
			{/* <div id='search'><SearchComponent searchContactHandler={searchContactHandler} /></div> */}
			<div id='SearchBar'>
				<form onSubmit={searchContactHandler} className='search'>
					<input type="search" name="search" id="search_field" placeholder="Enter Name / Id "
						value={searchInput}
						onChange={(e) => { setSearchInput(e.target.value) }}
					/>
					<abbr title="Search Students"><button type="submit"  ><SearchIcon /></button></abbr>
				</form>
			</div>
			<div id="user">
				<button id='addStudent' onClick={addStudent}><PersonAddAltIcon style={{ fontSize: "18px", paddingRight: "0.2em" }} />Add Student</button>
				<div id='TableScroll'>
					{/* <table id='userData'> */}
							{searchInput.length > 1 ?
								
								<DisplayUser Student={FilteredResults} deleteStudent={deleteStudent} />

							:	<DisplayUser Student={Student} deleteStudent={deleteStudent} />
							
							}
					{/* </table>  */}
				</div>
			</div>

		</div>
	)
}
