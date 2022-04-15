import { useState } from 'react';

const useApi = (apiFun) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState();
	const [loading, setLoading] = useState();

	const requset = async (...args) => {
		setLoading(true);
		const response = await apiFun(...args);
		setLoading(false);

		setError(!response.ok);
		setData(response.data.data);

		return response;
	};

	return {
		data,
		error,
		loading,
		requset,
	};
};

export default useApi;
