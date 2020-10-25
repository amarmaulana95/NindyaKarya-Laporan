import axios from 'axios'

class UserService {
    // getCategorys() {
    //     return axios.get('http://localhost:3002/category')
    // }

    // getCategory(id) {
    //     return axios.get(`http://localhost:3002/category/${id}`)
    // }

    // deleteCategory(id) {
    //     return axios.delete(`http://localhost:3002/category/${id}`)
    // }

    userLogin(credentials) {
        let FormData = require('form-data');
        let data = new FormData();
        data.append('username', credentials.username);
        data.append('password',  credentials.password);
        return axios.post('https://projectapi-tes.000webhostapp.com/user/auth', data)
    }
}
export default new UserService();