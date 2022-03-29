import React,{useState} from 'react'
import '../components/Signup.css';
import {Link,useNavigate} from "react-router-dom";
import api from '../Service/LoginService';
import LoginService from '../Service/LoginService';
export default function Signup() {
  const Navigate=useNavigate()
  const[data,setData]=useState({
    username:'',
    email:'',
    password:'',
    conformPassword:'',
    userrole:'',
  })
  const [Error,setError]=useState("")
  const{username,email,password,conformPassword}=data;
  const ChangeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const SubmitHandler=e=>{
    e.preventDefault();
    if(password!==conformPassword){
      setError("passwords mismatch");
      return;
    }
    console.log(data);
    let user={"username":data.username,"email":data.email,"password":data.password,"userrole":data.userrole}
    LoginService.SaveUser(user).then(
      Navigate("/")
    ).catch(e=>{return e})
    
  }
  
  return (
    <div>
      <div id="Title">PhD Admission Portal</div>
      <div className="Login-box">
        <h1>Register</h1>
      <form onSubmit={SubmitHandler}>
            <div className="textbox">
                <i className="fas fa-user" aria-hidden="true"></i>
                <label for="UserType">User Type : </label>
                <select id="UserType" name="userrole" value={data.userrole} onChange={ChangeHandler}>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>

            </div>
            <div className="textbox">
                <i className="fas fa-id-badge" aria-hidden="true"></i>
                <input type="text" placeholder="User Name" name="username" value={username} onChange={ChangeHandler} minlength="6" maxlength="25" required></input>
            </div>
            <div className="textbox">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <input type="text" placeholder="Email" name="email" value={email} minlength="5" onChange={ChangeHandler} maxlength="25" required></input>

            </div>
            {/* <p id="ErrorEmail">{Error}</p> */}
            <div className="textbox">
                <i className="fas fa-lock" aria-hidden="true"></i>
                <input type="password" placeholder="Password" name="password" value={password} onChange={ChangeHandler} minlength="8" maxlength="13" required></input>
            </div>
            
            <div className="textbox">
                <i className="fas fa-lock" aria-hidden="true"></i>
                <input type="password" placeholder="Confirm Password" name="conformPassword" value={conformPassword} onChange={ChangeHandler} minlength="8" maxlength="13"
                    required></input>
            </div>
            <p id="ErrorPassword">{Error}</p>
            <input type="checkbox" id="PrivacyInfo" required></input><label for="PrivacyInfo">Privacy Info</label>
            <input type="checkbox" id="UserAgreement" required></input><label for="UserAgreement
            ">User Agreement</label>
            

            <input className="btn" type="button" name="" value="Submit" id="Submit" onClick={SubmitHandler}></input>
            <label for="Login" id="OldUser">Already a User</label> 
            <Link id="Login" to="/">
              Login
            </Link>
        </form>
        </div>
    </div>
  )
}
