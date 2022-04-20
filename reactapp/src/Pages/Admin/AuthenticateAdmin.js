import React from 'react'
import { fetchUserData } from '../../Api/AuthenticationService';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style.css';



export const getTokenLogin = () => {
    if(localStorage){
        return (localStorage.getItem("Assign")==="true"?true:false)
    }
    
}

function Authenticate() {

    const usenavigate = useNavigate();
    const [data, setData] = useState({});
    let m = data.email
    console.log(m)


    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();

        })
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(data.username==="undefined"){
            usenavigate('/')
        }else{
            localStorage.setItem("Assign",true)
            usenavigate('/admin/dashboard');
        }
        
        
    }


    return (
        <div >

            <p className="display-1">WELCOME</p>


            <p className="lead">
                If Your Unable To Find The Start Button You May Be Entered Wrong GateWay . This GateWay
                For Adminstrator ! Users Try To Re-Login
            </p>






            <div className='auth'>
                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 && <Button type="submit" className="custom-btn btn-5" onClick={handleSubmit} >Start :)</Button>}
            </div>
        </div>
    )
}

export default Authenticate;