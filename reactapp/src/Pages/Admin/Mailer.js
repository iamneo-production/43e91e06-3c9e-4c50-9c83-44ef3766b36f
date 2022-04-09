import emailjs from 'emailjs-com'
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import '../Style.css';


const Mailer = ({loading, error, ...props})=> {
   


    const usenavigate = useNavigate();


    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_lc3a1or','template_it7jqmj',e.target,'0C3fg6Ghhl2fj0Jv4').then(res=>{
            usenavigate('/admin/redirected')
            console.log(res)
        })
    }


    


    return (
        <div className='area'>
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <section>

                <div class="container">
                    <div class="user signinBx">
                        <div class="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>

                        <div class="formBx">

                            <form className="my-login-validation" onSubmit={sendEmail} noValidate={false}>
                                <h2>Request For Admin account</h2>
                                <div className="form-group">
                                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="/admin/mailer" role="tab" aria-controls="home" aria-selected="true">Admin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="/user/signup" role="tab" aria-controls="profile" aria-selected="false">User</a>
                                        </li>
                                    </ul>
                                    <input type="text" className="form-control"  name='name'
                                         placeholder="Your Name *" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email For Verification *"
                                       name='user_email' required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Reference Number / Phonenumber *" 
                                         name='message' required />
                                </div>
                                  

                                <button className='custom-btn btn-5'>Submit</button>
                                
                            </form>
                        </div>
                    </div>

                </div>
            </section>

        </div>

    )
}

export default Mailer