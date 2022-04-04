import axios from 'axios';


const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io'}/api/v1/auth/login`,
        'data':authRequest
    })
}

export const fetchUserData=(authRequest)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io'}/api/v1/auth/userinfo`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}