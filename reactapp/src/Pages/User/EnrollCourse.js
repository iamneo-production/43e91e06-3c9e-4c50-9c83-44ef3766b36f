import React, { useState, useEffect } from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate,useParams } from 'react-router-dom';
import { fetchUserData } from '../../Api/AuthenticationService';
import AcademyService from '../Admin/AcademyService'
import AdminService from '../Admin/AdminService';
import '../Style.css'





export const Institute = (props) => {
    const usenavigate = useNavigate();
    const [institute, setInstitute] = useState([]);
    const [query, setQuery] = useState("");
    const [course, setCourse] = useState([]);
    const{instituteid}=useParams();
    const{institutename}=useParams();
    const [id, setId] = useState('')

    console.log(instituteid)

    useEffect(() => {
        getInstitutesById();
    }, [])

    console.log(instituteid)

    const getInstitutesById = () => {
        AdminService.getInstitutessById(instituteid).then((response) => {
            setCourse(response.data)
            
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }


    useEffect(()=>{
        setId(data.id)
    },)

    const handleSubmit=(id)=>{
        usenavigate("/user/enrolledCourse/"+id)
    }


    React.useEffect(() => {
        fetchUserData().then((response) => {
            
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();

        })
    }, [])



    

    const [data, setData] = useState({});

    useEffect(()=>{
        AdminService.getInstitutessById(instituteid).then((response)=>{
           
			console.log(instituteid)
            
        }).catch(error=>{
            console.log(error)
        })
    },[])

    function Enroll(coursename,courseid,instituteid,institutename){
        usenavigate('/user/enrolldetails/'+coursename+'/'+courseid+'/'+instituteid+'/'+institutename)
    }

    const logOut = () => {
        sessionStorage.clear()
        localStorage.clear();
        usenavigate('/');

    }

    return (
        <div className="area">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
            <ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStarp.Container>
                    <ReactBootStarp.Navbar.Brand href="/user/dashboard">PG_Admission</ReactBootStarp.Navbar.Brand>
                    <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStarp.Nav className="me-auto">
                            <ReactBootStarp.Nav.Link href="/user/viewInstitute">Institute</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link onClick={()=>handleSubmit(data.id)}>Enrolled Courses</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link href="/user/news">News Feed</ReactBootStarp.Nav.Link>
                        </ReactBootStarp.Nav>
                        <ReactBootStarp.Nav>
                            <ReactBootStarp.NavDropdown title="More Info" id="collasible-nav-dropdown">
                                <ReactBootStarp.NavDropdown.Item href="/user/profile">Profile</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Item href="/user/help">Help&Support</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Item href="#action/3.3">About</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Divider />
                                <ReactBootStarp.NavDropdown.Item onClick={() => logOut()}>Logout</ReactBootStarp.NavDropdown.Item>
                            </ReactBootStarp.NavDropdown>
                        </ReactBootStarp.Nav>
                    </ReactBootStarp.Navbar.Collapse>
                </ReactBootStarp.Container>
            </ReactBootStarp.Navbar>
            <br></br>
            <div>
                <div class="container h-100">
                    <div class="d-flex justify-content-center h-100">
                        <div class="searchbar">
                            <input class="search_input" type="text" name="" onChange={e => setQuery(e.target.value)} placeholder="Search..." />
                            <a class="search_icon"><i class="fas fa-search"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div>
                {
                    
                    course.map(
                        course=>
                            <div>
                                <ReactBootStarp.Card>
                                    <ReactBootStarp.Card.Header className="gradient">Info : {course.courseid}</ReactBootStarp.Card.Header>
                                    <ReactBootStarp.Card.Body>
                                        <ReactBootStarp.Card.Title >Course Name: {course.coursename}</ReactBootStarp.Card.Title>
                                        <div>Course Description: {course.courseDescription}</div>
                                        <br/>
                                        <div>Course Duration: {course.courseDuration}Years</div>
                                        <br/>
                                        <div>Institute Id: {course.instituteid}</div>
                                        
                                        <ReactBootStarp.Button variant="success" onClick={() => Enroll(course.coursename,course.courseid,instituteid,institutename)}>Enroll Course</ReactBootStarp.Button>
                                        
                                    </ReactBootStarp.Card.Body>
                                </ReactBootStarp.Card>
                                <br/>
                            </div>
                    )
                }
                 

            </div>
                





        </div>
    )
}

export default Institute;