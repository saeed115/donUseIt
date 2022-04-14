import * as SecureStore from 'expo-secure-store';

const key = 'authToken';

const storeToken = async (token) => {
	try {
		await SecureStore.setItemAsync(key, JSON.stringify(token));
	} catch (error) {
		console.log('Error storing token' + error);
	}
};

const getToken = async () => {
	try {
		const token = await SecureStore.getItemAsync(key);
		return JSON.parse(token);
	} catch (error) {
		console.log('Error getting token' + error);
	}
};

const getUser = async () => {
	const user = await getToken();

	return user ? user : null;
};

const removeToken = async () => {
	try {
		return await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log('Error removing token' + error);
	}
};

export default {
	storeToken,
	getUser,
	removeToken,
	getToken,
};
