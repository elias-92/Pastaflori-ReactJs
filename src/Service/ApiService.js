import axios from 'axios';

export const baseUrl = 'https://63a19d79a543280f775bf3d6.mockapi.io/cake';

export const API_Endpoints = {
	ITEMS: '',
};
export const API_Method = {
	POST: 'POST',
	GET: 'GET',
	DELETE: 'DELETE',
	PUT: 'PUT',
};

export async function consultApi(endPoint, method, object = {}) {
	try {
		if (method === API_Method.DELETE) {
			const response = await axios.delete(`${baseUrl}${endPoint}/${object.id}`);
			return response;
		} else {
			const response = await axios({
				url: `${baseUrl}${endPoint}`,
				method: method,
				data: object,
			});
			return response;
		}
	} catch (e) {
		console.error(e);
	}
}
