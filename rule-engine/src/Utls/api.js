import axios from 'axios'


export const getToken = () =>{
    return localStorage.getItem('token')
}

//This is an axios helper with some predefined values
const api = () => {
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: getToken(),
        }
    })
};

export default api;