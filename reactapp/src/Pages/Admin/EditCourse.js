import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import * as ReactBootStarp from 'react-bootstrap';
import AdminService from './AdminService';
import { fetchUserData } from '../../Api/AuthenticationService';


const UpdateComponent=()=>{
    const[coursename,setCoursename]=useState('')
    const[courseDescription,setCourseDescription]=useState('')
    const[courseDuration,setCourseDuration]=useState('')
    const[instituteid,setInstituteid]=useState('')
    const navigate = useNavigate();
    const{courseid}=useParams();


    const UpdateCourse = (e)=>{
        e.preventDefault();
        const course = {coursename,courseDescription,courseDuration,instituteid}
        if(courseid){
            AdminService.updateCourse(courseid,course).then((response)=>{
                navigate('/admin/courseadmin')
            }).catch(error=>{
                console.log(error)
            })
        }else{
            AdminService.addCourse(course).then((response)=>{
                console.log(response.data)
                navigate('/admin/addCourse')
            }).catch(error=>{
                console.log(error)
            })
        }
    }
    const logOut=()=>{
        sessionStorage.clear()
        localStorage.clear();
        navigate('/');

    }

    const [data, setData] = useState({});

    useEffect(()=>{
        if(data.username==="undefined"){
            localStorage.clear();
            navigate('/')
        }
    },)

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();

        })
    }, [])


    useEffect(()=>{
        AdminService.getCourseById(courseid).then((response)=>{
            setCoursename(response.data.coursename)
            setCourseDescription(response.data.courseDescription)
            setCourseDuration(response.data.courseDuration)
            setInstituteid(response.data.instituteid)
        }).catch(error=>{
            console.log(error)
        })
    },[])


    return(
        <div className='area'>
        <ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <ReactBootStarp.Container>
        <ReactBootStarp.Navbar.Brand href="/admin/dashboard">PG_Admission</ReactBootStarp.Navbar.Brand>
        <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStarp.Nav className="me-auto">
        <ReactBootStarp.Nav.Link className="gradient" href="/admin/academyadmin">Academy</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link className="gradient active" href="/admin/courseadmin">Course</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link className="gradient" href="/admin/studentadmin">Students</ReactBootStarp.Nav.Link>
        
        <ReactBootStarp.Nav.Link className="gradient" href="/admin/news">News Feed</ReactBootStarp.Nav.Link>
    </ReactBootStarp.Nav>
    <ReactBootStarp.Nav>
      <ReactBootStarp.NavDropdown className="gradient" title="More Info" id="collasible-nav-dropdown">
        <ReactBootStarp.NavDropdown.Item href="/admin/Profile">Profile</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Item href="#action/3.2">Help&Support</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Item href="/admin/moreinfo">About</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Divider />
        <ReactBootStarp.NavDropdown.Item onClick={() =>logOut()}>LogOut</ReactBootStarp.NavDropdown.Item>
        </ReactBootStarp.NavDropdown>
      </ReactBootStarp.Nav>
      </ReactBootStarp.Navbar.Collapse>
    </ReactBootStarp.Container>
    </ReactBootStarp.Navbar>

    <ReactBootStarp.Card>
        <ReactBootStarp.Card.Body>
        <ReactBootStarp.Card.Header className="gradient">Course Details</ReactBootStarp.Card.Header>
            <div id="std">
                <div className="input1">
                <div className="textbox"><input type="text" id="instituteid" value={instituteid}
            onChange={(e)=>setInstituteid(e.target.value)} placeholder="enter Institute Id"  /></div>


                    <div className="textbox"><input type="text" id="coursename" value={coursename}
            onChange={(e)=>setCoursename(e.target.value)} placeholder="enter Course name"  /></div>
                    
                    
                </div>

                <div className="input2">
                   
                <div className="textbox"><input type="text" id="courseduration" value={courseDuration}
            onChange={(e)=>setCourseDuration(e.target.value)} placeholder="enter CourseDuration"  /></div>

                    <div className="textbox"><input type="text" id="coursedescription" value={courseDescription}
            onChange={(e)=>setCourseDescription(e.target.value)} placeholder="enter CourseDescription"  /></div>
                </div>

                <div className="input3">
                    
                    
                    
                    
                </div>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                <button type="button" id="submit" onClick={(e)=>UpdateCourse(e)} href="/admin/viewCourse">Submit</button>
                <button type="button" id="cancle" href="/admin/viewCourse" >Cancle</button>
            </div>
            </ReactBootStarp.Card.Body>
        </ReactBootStarp.Card>


    </div>
    )




}

export default UpdateComponent