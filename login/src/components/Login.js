import React, { useEffect, useState } from 'react'
import '../components/Login.css';
import {Link, useNavigate} from 'react-router-dom';
import api from '../Service/LoginService';
import LoginService from '../Service/LoginService';
function Login() {
  const Navigate=useNavigate();
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[user,setUser]=useState([])
  const[Error,setError]=useState("")
  const check=()=>{
    const User = user.find(user => user.email === email); // extract the email from the formData
    if (User) return User;
  
  }

  const SubmitHandler=(e)=>{
    e.preventDefault();
    console.log(email,password);
    console.log(user);
    let data=check();
    if (password===data.password){
        alert("Login Succesfull");
        if(data.userrole==="Admin"){
        Navigate("/Admin/Dashboard")
        }
        if(data.userrole==="User"){
          Navigate("/User/Dashboard")
        }
    }
    else{
      setError("password or email is invalid")
    }
  }
  useEffect(()=>{
    const getUser= async()=>{
      LoginService.GetUser().then(
        (res)=>setUser(res.data)
      )
    }
    getUser()
  },[])
  return (
    <div>
      
      <div id="Title">PhD Admission Portal</div>
      
      <div class="Login-box">
        <h1>LOG IN</h1>
        <div class="textbox" > 
            <i class="fas fa-user" aria-hidden="true" ></i>
             <input type="text" placeholder="Email" name="" value={email} minLength="5" onChange={(e)=>setEmail(e.target.value)} maxLength="25" required ></input>
              
          </div>
          
        <div class="textbox" >
            <i class="fas fa-lock" aria-hidden="true"></i>
            <input type="password" placeholder="Password" name="" value={password} onChange={(e)=>setPassword(e.target.value)} minLength="5" maxLength="13" required />
        </div>
        <p id="ErrorPassword">{Error}</p>
        <form action="Signup">
          
          <button  className='but' onClick={SubmitHandler}>
            submit
          </button>
        </form>
        <div className='linkk'>
          <p className="par">if u r a new user?</p>
          <Link to="/Signup">
            <li>signup</li>
          </Link>
        </div>
        
      </div>
      
    </div>
  )
}

export default Login
