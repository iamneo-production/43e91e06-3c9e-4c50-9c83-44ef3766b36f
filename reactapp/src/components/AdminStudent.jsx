import React, { useState, useEffect } from 'react'
import '../styles/AdminStudent.css'
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';
import DisplayStudent from './DisplayStudent';

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


	const addStudent = () => {
		navigate("/admin/addStudent");
	}

	return (
		<div className='DisplayUser'>
			<h1>User Details</h1>
			<div id='SearchBar'>
				<form onSubmit={searchContactHandler} className='search'>
					<input type="search" name="search" id="search_field" placeholder="Enter Name / Id "
						value={searchInput}
						onChange={(e) => { setSearchInput(e.target.value) }}
					/>
					<abbr title="Search Students"><button type="submit"  >Search</button></abbr>
				</form>
			</div>
			<div id="user">
				<button id='addStudent' onClick={addStudent}>Add Student</button>
				<div id='TableScroll'>

					{searchInput.length > 1 ?

						<DisplayStudent Student={FilteredResults} deleteStudent={deleteStudent} />

						: <DisplayStudent Student={Student} deleteStudent={deleteStudent} />

					}

				</div>
			</div>

		</div>
	)
}
