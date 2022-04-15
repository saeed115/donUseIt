import * as Localization from 'expo-localization';
import cache from '../../utility/cache';

const LANGUAGE_KEY = 'settings.lang';

const languageDetector = {
	type: 'languageDetector',
	async: true,
	detect: async (callback) => {
		// We will get back a string like "en-US". We
		// return a string like "en" to match our language
		// files.
		try {
			await cache.getData(LANGUAGE_KEY).then((language) => {
				console.log('lang ' + language);
				return callback(language ?? Localization.locale.split('-')[0]);
			});
		} catch (error) {
			console.log('error reading language', error);
		}
	},
	init: () => {},
	cacheUserLanguage: async (language) => {
		try {
			await cache.storeData(LANGUAGE_KEY, language);
		} catch (error) {
			console.log(error);
		}
	},
};

export default languageDetector;
