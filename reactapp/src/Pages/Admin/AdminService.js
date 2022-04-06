import axios from "axios";
const VIEW_BASE_REST_API_URL = 'http://localhost:8080/course';

class ViewService{
    getAllCourse(){
        return axios.get(VIEW_BASE_REST_API_URL+'/viewcourses')
    }

    addCourse(course){
        return axios.post(VIEW_BASE_REST_API_URL+'/addCourse'+course)
    }
    getCourseById(courseid){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+courseid)
    }
    updateCourse(courseid,course){
        return axios.put(VIEW_BASE_REST_API_URL+'/updatecourse/'+courseid,course);
    }
    deleteCourseById(courseid){
        return axios.delete(VIEW_BASE_REST_API_URL+'/'+courseid)
    }

    
}

export default new ViewService();