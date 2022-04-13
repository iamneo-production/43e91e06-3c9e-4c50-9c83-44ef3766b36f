import axios from "axios";

const VIEW_BASE_REST_API_URL = 'http://localhost:8080/admission';

class Service{
    addStudent(student)
    {
        return axios.post(VIEW_BASE_REST_API_URL+'/addStudent');
    }
    getStudentById(studentid){
        return axios.get(VIEW_BASE_REST_API_URL+'/getStudentByid='+studentid);
    }

    updateStudentById(studentid,student){
        return axios.put(VIEW_BASE_REST_API_URL+'/updateStudentByid='+studentid,student);
    }   

    deleteStudentById(studentid)
    {
        return axios.delete(VIEW_BASE_REST_API_URL+'/deleteStudentByid='+studentid);
    }

}

export default new Service();