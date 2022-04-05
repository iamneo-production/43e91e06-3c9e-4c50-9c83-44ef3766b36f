import axios from "axios";
const VIEW_BASE_REST_API_URL = 'https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/users';

class SignupService{
    getUserByName(username){
        return axios.get(VIEW_BASE_REST_API_URL+"/"+username);
    }

    findAllUsers(){
        return axios.get(VIEW_BASE_REST_API_URL+"/viewusers");
    }

    findByUser(username){
        return axios.get(VIEW_BASE_REST_API_URL+"/"+username);
    }

    
}

export default new SignupService();