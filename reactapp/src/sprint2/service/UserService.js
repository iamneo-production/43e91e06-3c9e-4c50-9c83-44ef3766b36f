import axios from "axios";
import api from '../api/User';
class UserSetvice{

    getStudents() {
        return api.get("/Students")
    }
    getByStudentId(id) {
        console.log(id);
        return api.get(`/Students/${id}`);
    }

    addStudent(student){
        return api.post("/Students",student);
    }
    editStudent(student,id){
        return api.put(`/Students/${id}`,student);
    }
    deleteStudent(id){
        return axios.delete("http://localhost:3006/Students/"+id);
    }

}

export default new UserSetvice();