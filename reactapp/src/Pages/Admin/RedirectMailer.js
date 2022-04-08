import React from 'react'
import { Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Style.css';




function RedirectMailer(){
    
    const usenavigate = useNavigate();
    

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        usenavigate('/');
    }


    return(
        <div className="area" >

        <p className="display-1">WELCOME</p>

        
        <p className="lead">
            The Further Information For Admin Registration Account Will Be Contacted To Your Email Within 1 Minute Or A Day 
        </p>





        
            <div className='adjus'>
                <Button type="submit" className="custom-btn btn-5" onClick={handleSubmit} >Go to Login :)</Button> 
            </div>
        </div>
    )
}

export default RedirectMailer;