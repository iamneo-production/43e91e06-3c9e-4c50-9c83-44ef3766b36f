import axios from 'axios'
const Url="http://localhost:3006/User"
class LoginService{
    SaveUser(user){
        return axios.post(Url,user);
    }
    GetUser(){
        return axios.get(Url);
    }
}
export default new LoginService();