import axios from 'axios'


export const getToken = () =>{
    return localStorage.getItem('token')
}

//This is an axios helper with some predefined values
const api = () => {
    return axios.create({
        baseURL: 'https://bw-rule-engine.herokuapp.com',
        headers: {
            Authorization: getToken(),
        }
    })
};

export default api;