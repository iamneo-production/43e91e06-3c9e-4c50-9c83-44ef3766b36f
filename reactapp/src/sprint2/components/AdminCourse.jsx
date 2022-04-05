import React, { useState, useEffect } from 'react'
import '../styles/AdminCourse.css'
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DisplayCourse from './DisplayCourse';

export default function AdminStudent(props) {
	const [error, setError] = React.useState(null);
	const [Student, setStudent] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [FilteredResults, setFilteredResults] = useState([]);
	const navigate = useNavigate();

	

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


	const addCourse = () => {
		navigate("/admin/addStudent");
	}

	return (
		<div className='DisplayUser'>
			<h1>Course Details</h1>
			<div id='SearchBar'>
				<form onSubmit={searchContactHandler} className='search'>
					<input type="search" name="search" id="search_field" placeholder="Enter Course "
						value={searchInput}
						onChange={(e) => { setSearchInput(e.target.value) }}
					/>
					<abbr title="Search Courses"><button type="submit"  ><SearchIcon /></button></abbr>
				</form>
			</div>
			<div id="user">
				<button id='addCourse' onClick={addCourse}><PersonAddAltIcon style={{ fontSize: "18px", paddingRight: "0.2em" }} />Add Course</button>
				<div id='TableScroll' style={{width:"100%"}}>

							{searchInput.length > 1 ?
								
								<DisplayCourse courses={FilteredResults} deleteStudent={deleteStudent} />

							:	<DisplayCourse courses={Student} deleteStudent={deleteStudent} />
							
							}

				</div>
			</div>

		</div>
	)
}
