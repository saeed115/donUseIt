import React, { useState } from 'react';
import { StyleSheet, Switch, I18nManager, View } from 'react-native';
import { Restart } from 'fiction-expo-restart';
import * as Localization from 'expo-localization';

import colors from '../config/colors';
import { useTranslation } from 'react-i18next';
import cache from '../utility/cache';
import AppText from './AppText';
import i18n from 'i18n-js';

const SwitchButton = () => {
	const [isEnabled, setIsEnabled] = useState(true);

	const handelChange = async () => {
		setIsEnabled((previousState) => !previousState);

		await cache.storeData('localeLang', Localization.locale === 'ar-AE' ? 'en-US' : 'ar-AE');
		const locale = await cache.getData('localeLang');
		i18n.locale = locale;

		I18nManager.forceRTL(Localization.locale === 'ar-AE' ? true : false);

		Restart();
	};
	return (
		<View style={styles.container}>
			<AppText>{t('accountScreen.settingScreen.lang')}</AppText>

			<Switch
				trackColor={{ false: colors.dark, true: colors.primary }}
				thumbColor={colors.white}
				ios_backgroundColor={colors.primary}
				onValueChange={handelChange}
				value={isEnabled}
			/>
		</View>
	);
};

export default SwitchButton;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		flex: 1,
		marginBottom: 15,
	},
});
