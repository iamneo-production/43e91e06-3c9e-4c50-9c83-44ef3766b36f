import axios from "axios";
const VIEW_BASE_REST_API_URL = 'http://localhost:8080/institute';

class AcademyService{
    getAllInstitute(){
        return axios.get(VIEW_BASE_REST_API_URL+'/viewinstitute')
    }

    addInstitute(institute){
        return axios.post(VIEW_BASE_REST_API_URL+'/addInstitute'+institute)
    }
    getInstituteById(instituteid){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+instituteid)
    }
    updateInstitute(instituteid,institute){
        return axios.put(VIEW_BASE_REST_API_URL+'/updateinstitute/'+instituteid,institute);
    }
    deleteInstituteById(instituteid){
        return axios.delete(VIEW_BASE_REST_API_URL+'/'+instituteid)
    }

    
}

export default new AcademyService();