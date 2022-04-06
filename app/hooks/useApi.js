import { useState } from 'react';

const useApi = (apiFun) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState();
	const [loading, setLoading] = useState();

	const requset = async (...args) => {
		setError(false);
		setLoading(true);
		const response = await apiFun(...args);
		setLoading(false);

		if (!response.ok) return setError(true);

		setError(false);
		setData(response.data);
	};

	return {
		data,
		error,
		loading,
		requset,
	};
};

export default useApi;
