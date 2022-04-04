import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './MoreInfo.css'
import '../../App.css'


function SignupPageAdminRed1() {
    const usenavigate = useNavigate();
    const [roleCode] = useState('ADMIN')
    const [roleDescription] = useState('ADMIN')


    const handleClick = (e) => {
        e.preventDefault()


        const addAuthentication = { roleCode, roleDescription }
        console.log(addAuthentication)
        fetch("https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/users/addAuthority", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addAuthentication)
        }).then(() => {
            console.log("You Can Move On")
        })
        usenavigate("/admin/signupredirect2")

    }





    return (
        <div className="area">
        <br></br>
        <div className='App'>Click The button to Complete The Remaining Step</div>
        <button className="custom-btn btn-6" onClick={handleClick}><span>Click Me</span></button>

            <div class="boat">
                <div class="wrap">
                    <div class="main">
                        <div class="boat-top-layer">
                        
                            <div class="top">
                                <div class="pole"></div>
                                <div class="help"><span></span></div>
                            </div>
                            <div class="bottom"></div>
                        </div>
                        
                        <div class="boat-mid-layer">
                            <div class="top"></div>
                            <div class="bottom"></div>
                        </div>
                        
                        <div class="boat-bot-layer">
                            <div class="top"></div>
                            <div class="bottom"></div>
                        </div>
                    </div>
                </div>
                

                <div class="water">
                    <div class="drops clearfix drops-1">
                        <span class="drop drop-a"></span>
                        <span class="drop drop-b"></span>
                        <span class="drop drop-c"></span>
                        <span class="drop drop-d"></span>
                        <span class="drop drop-e"></span>
                        <span class="drop drop-f"></span>
                        <span class="drop drop-g"></span>
                        <span class="drop drop-h"></span>
                    </div>

                    
                    <div class="drops clearfix drops-2">
                        <span class="drop drop-a"></span>
                        <span class="drop drop-b"></span>
                        <span class="drop drop-c"></span>
                        <span class="drop drop-d"></span>
                        <span class="drop drop-e"></span>
                        <span class="drop drop-f"></span>
                        <span class="drop drop-g"></span>
                        <span class="drop drop-h"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPageAdminRed1