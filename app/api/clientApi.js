import { create } from 'apisauce';

import cache from '../utility/cache';

const clientApi = create({
	baseURL: 'https://doneuseit.herokuapp.com',
});

// clientApi.addAsyncRequestTransform(async (requests) => {
// 	const response = await storage.getToken();
// 	const token = response.token ? response.token : '';

// 	requests.headers['authorization'] = token;
// });

const get = clientApi.get;

clientApi.get = async (url, params, axiosConfig) => {
	const response = await get(url, params, axiosConfig);

	if (response.ok) {
		cache.storeData(url, response.data);
		return response;
	}

	const data = await cache.getData(url);

	return data ? { ok: true, data } : response;
};

export default clientApi;
