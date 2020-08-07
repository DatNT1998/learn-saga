import axios from 'axios';

class AxiosService {
    constructor(){
        // xem lai interceptors cua axios
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError)
        this.instance = instance;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        console.log(error, 'loi o day');
        return Promise.reject(error);
    }

    get(url) {
        return this.instance.get(url);
    } 
}

export default new AxiosService();