import axios from 'axios'
export default axios.create({
    baseURL: 'https://watchtrade-api.herokuapp.com',
    // timeout: 1000,
    headers: {Authorization: 'Bearer '+localStorage.getItem("accessToken")}
});