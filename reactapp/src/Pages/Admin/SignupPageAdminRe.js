import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import './MoreInfo.css'
import { useParams } from "react-router-dom";

function SignupPageAdminRe() {
    const usenavigate = useNavigate();
    const[id,setId] = useState('')
    const {username} = useParams()

    console.log(id)
    console.log(username)

    let authorities_id = id
	console.log(authorities_id)

    const handleClick = (e) => {
        e.preventDefault()
        const addAuth = { authorities_id }
        console.log(addAuth)
        fetch("https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/users/addAuth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addAuth)
        }).then(() => {
            console.log("You Can freely Move On")
        })
        usenavigate("/admin/login")
    }



    useEffect(()=>{
        SignupService.findByUser(username).then((response)=>{
            setId(response.data.id)
            console.log(id)
            
        }).catch(error=>{
            console.log(error)
        })
    },[])


    
    return (
        <div className="area">
        <br></br>
            <div className='App'>Click The button to Complete The Last Step</div>
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

export default SignupPageAdminRe