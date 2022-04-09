import React, { useState } from 'react';
import { StyleSheet, View, I18nManager } from 'react-native';
import AppText from '../components/AppText';
import FullScreen from '../components/FullScreen';

import RadioButton from '../components/RadioButton';
import SwitchButton from '../components/SwitchButton';
import defalutStyle from '../config/defalutStyle';
import { t } from '../localizations';

const SettingScreen = () => {
	const [arLang, setArLang] = useState(I18nManager.isRTL);
	const [enLang, setEnLang] = useState(I18nManager.isRTL !== true);

	console.log();

	return (
		<FullScreen style={styles.screen}>
			<View>
				<AppText style={styles.text}>{t('accountScreen.settingScreen.langTitle')}</AppText>

				<RadioButton
					selected={arLang}
					title={t('accountScreen.settingScreen.lang')}
					onPress={() => console.log()}
				/>

				<RadioButton
					selected={enLang}
					title={t('accountScreen.settingScreen.antherLang')}
					onPress={() => console.log()}
				/>

				<SwitchButton />
			</View>
		</FullScreen>
	);
};

export default SettingScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 20,
		backgroundColor: defalutStyle.colors.light,
	},
	text: {
		marginBottom: 15,
	},
});
