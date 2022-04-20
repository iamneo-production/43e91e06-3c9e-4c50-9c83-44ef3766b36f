import axios from "axios";
const VIEW_BASE_REST_API_URL = 'https://8080-fbcdaceafcabcebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/student';

class EnrollService{
    getAllStudents(){
        return axios.get(VIEW_BASE_REST_API_URL+'/viewStudents')
    }

    getById(id){
        return axios.get(VIEW_BASE_REST_API_URL+'/particular/'+id)
    }

    addStudent(student){
        return axios.post(VIEW_BASE_REST_API_URL+'/addStudent'+student)
    }
    getStudentById(studentid){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+studentid)
    }
    updateStudent(studentid,student){
        return axios.put(VIEW_BASE_REST_API_URL+'/updateStudent/'+studentid,student);
    }
    deleteStudentById(studentid){
        return axios.delete(VIEW_BASE_REST_API_URL+'/'+studentid)
    }

    
}

export default new EnrollService();