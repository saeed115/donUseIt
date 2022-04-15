import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import en from './lang/en.json';
import ar from './lang/ar.json';
import languageDetector from './services/languageDetector';

const resources = {
	en: {
		translation: en,
	},
	ar: {
		translation: ar,
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(languageDetector)
	.init({
		compatibilityJSON: 'v3',
		resources,
		// lng: I18nManager.isRTL ? 'ar' : 'en',
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
