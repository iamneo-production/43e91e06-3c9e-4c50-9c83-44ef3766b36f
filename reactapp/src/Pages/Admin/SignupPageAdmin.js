
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import '../Style.css';


export const getFakeLogin=()=>{
    return( sessionStorage.getItem("loggedIn")==="admin"?true:false)
}


const SignPageAdmin = ({loading, error, ...props})=> {
    const usenavigate = useNavigate();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [enabled] = useState('true')





    const handleClick = (e) => {
        e.preventDefault()
        const addUser = { username, email, password, phonenumber, enabled }
        console.log(addUser)
        fetch("https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/users/addUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addUser)
        }).then((res) => {
            console.log(res)
            if(!res.ok){
                throw Error('Could Not Enter Element')
               
            }
            if(res.ok){
                usenavigate("/admin/signupredirect1/"+username)
                sessionStorage.setItem("loggedIn","admin");
                console.log("New User Added")
            }
        }).catch(err=>{
            alert("User Already Exists")
            console.log(err.message)
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
                        <div class="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /></div>

                        <div class="formBx">

                            <form className="my-login-validation" onSubmit={handleClick} noValidate={false}>
                                <h2>Create an account</h2>
                                <div className="form-group">
                                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="/admin/signup" role="tab" aria-controls="home" aria-selected="true">Admin</a>
                                        </li>
                                        
                                    </ul>
                                    <input type="text" className="form-control" id="username" value={username}
                                        onChange={(e) => setUsername(e.target.value)} placeholder="Your Email *" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtEmpPhone" className="form-control"
                                        id="phonenumber" onChange={(e) => setPhonenumber(e.target.value)}
                                        placeholder="Your Phone *" value={phonenumber} required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username *" onChange={(e) => setEmail(e.target.value)}
                                        id="email" value={email} required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password *" value={password}
                                        onChange={(e) => setPassword(e.target.value)} id="password" required />
                                </div>
                                <div className="invalid-feedback">
                                    Password is required
                                </div>

                                <input type="submit" />

                                <p class="signup">
                                    Already have an account ?
                                    <a href="/admin/login" onclick="toggleForm">Sign in.</a>
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

        </div>

    )
}

export default SignPageAdmin