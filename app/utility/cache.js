import AsyncStorage from '@react-native-async-storage/async-storage';

const prefix = 'cache';

const storeData = async (key, value) => {
	try {
		await AsyncStorage.setItem(prefix + key, JSON.stringify(value));
	} catch (e) {
		console.log(e);
	}
};

const getData = async (key) => {
	try {
		const value = await AsyncStorage.getItem(prefix + key);
		const data = JSON.parse(value);

		return data != null ? data : null;
	} catch (e) {
		console.log(e);
	}
};

export default {
	storeData,
	getData,
};
