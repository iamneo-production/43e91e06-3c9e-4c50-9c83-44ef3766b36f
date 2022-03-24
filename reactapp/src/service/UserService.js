import axios from "axios";
import api from '../api/User';

class UserService{
    getStudent(){
        return api.get();
    }
}

export default new UserService();