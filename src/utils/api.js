
import axios from 'axios';


export function getToken() {
	return localStorage.getItem('token');
}


export default function() {
	return axios.create({
		baseURL: 'http://localhost:8080',
		headers: {
			Authorization: getToken()
		}
	});
}


