import axios from 'axios';
import config from '../../config.json';

export default function useAxios() {
    return axios.create({
        baseURL: config.apiUrl,
    });
}
