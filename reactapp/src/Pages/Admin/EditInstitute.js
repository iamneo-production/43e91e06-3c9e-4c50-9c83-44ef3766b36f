import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import * as ReactBootStarp from 'react-bootstrap';
import AcademyService from './AcademyService';
import { fetchUserData } from '../../Api/AuthenticationService';


const UpdateComponent=()=>{
    const[institutename,setInstitutename]=useState('')
    const[institutedescription,setInstitutedescription]=useState('')
    const[instituteaddress,setInstituteaddress]=useState('')
    const[mobile,setMobile]=useState('')
    const[email,setEmail]=useState('')
    const navigate = useNavigate();
    const{instituteid}=useParams();


    const UpdateCourse = (e)=>{
        e.preventDefault();
        const institute = {institutename,institutedescription,instituteaddress,mobile,email}
        if(instituteid){
            AcademyService.updateInstitute(instituteid,institute).then((response)=>{
                navigate('/admin/academyadmin')
            }).catch(error=>{
                console.log(error)
            })
        }else{
            AcademyService.addInstitute(institute).then((response)=>{
                console.log(response.data)
                navigate('/admin/addInstitute')
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
        AcademyService.getInstituteById(instituteid).then((response)=>{
            setInstitutename(response.data.institutename)
            setInstitutedescription(response.data.institutedescription)
            setInstituteaddress(response.data.instituteaddress)
            setMobile(response.data.mobile)
            setEmail(response.data.mobile)
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
        <ReactBootStarp.Nav.Link className="gradient active" href="/admin/academyadmin">Academy</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link className="gradient" href="/admin/courseadmin">Course</ReactBootStarp.Nav.Link>
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


    <div>
        <ReactBootStarp.Form>
    <ReactBootStarp.Row className="mb-3">
        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridEmail">
        <ReactBootStarp.Form.Label>Institute Name</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control type="text" id="institutename" value={institutename}
            onChange={(e)=>setInstitutename(e.target.value)} placeholder="Enter Institute Name" />
        </ReactBootStarp.Form.Group>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="formGridPassword">
        <ReactBootStarp.Form.Label>Institute Description</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control type="text" id="institutedescription" value={institutedescription}
            onChange={(e)=>setInstitutedescription(e.target.value)} placeholder="Type The Description" />
        </ReactBootStarp.Form.Group>
    </ReactBootStarp.Row>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="exampleForm.ControlTextarea1">
            <ReactBootStarp.Form.Label>Institute Address</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control as="textarea" rows={3} id="instituteaddress" value={instituteaddress}
            onChange={(e)=>setInstituteaddress(e.target.value)} placeholder="Enter the Address" />
        </ReactBootStarp.Form.Group>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="exampleForm.ControlTextarea1">
            <ReactBootStarp.Form.Label>Mobile Number</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control as="textarea" rows={3} id="mobile" value={mobile}
            onChange={(e)=>setMobile(e.target.value)} placeholder="Enter the MobileNumber" />
        </ReactBootStarp.Form.Group>

        <ReactBootStarp.Form.Group as={ReactBootStarp.Col} controlId="exampleForm.ControlTextarea1">
            <ReactBootStarp.Form.Label>Email</ReactBootStarp.Form.Label>
            <ReactBootStarp.Form.Control as="textarea" rows={3} id="email" value={email}
            onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the Email" />
        </ReactBootStarp.Form.Group>


        <div className="text-center">
            <ReactBootStarp.Button variant="success" size="lg" type="submit" onClick={(e)=>UpdateCourse(e)} >
                Submit
            </ReactBootStarp.Button>
        </div>
        </ReactBootStarp.Form>
        </div>


    </div>
    )




}

export default UpdateComponent