import axios from "axios";
const VIEW_BASE_REST_API_URL = 'http://localhost:8080/users';

class SignupService{
    getUserByName(username){
        return axios.get(VIEW_BASE_REST_API_URL+"/"+username);
    }

    findAllUsers(){
        return axios.get(VIEW_BASE_REST_API_URL+"/viewusers");
    }

    findByUser(username){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+username);
    }

    
}

export default new SignupService();