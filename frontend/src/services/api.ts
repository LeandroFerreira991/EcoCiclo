import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecociclo-backend-production.up.railway.app/'
})
 
export default api;