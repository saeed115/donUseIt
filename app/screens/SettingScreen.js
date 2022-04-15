import React from 'react';
import { StyleSheet, View, I18nManager, Pressable, DevSettings, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../components/AppText';
import defalutStyle from '../config/defalutStyle';
import FlatScreen from '../components/FlatScreen';
import ListItemSeparator from '../components/Lists/ListItemSeparator';

const SettingScreen = () => {
	const { t, i18n } = useTranslation();

	const language = [
		{ name: 'ar', label: 'عربي', isRTL: true },
		{ name: 'en', label: 'English', isRTL: false },
	];

	return (
		<FlatScreen style={styles.screen}>
			<AppText style={styles.text}>{t('accountScreen.settingScreen.langTitle')}</AppText>
			<View style={styles.btnContainer}>
				<FlatList
					data={language}
					keyExtractor={(lang) => lang.name}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item: lang }) => (
						<Pressable
							style={styles.button}
							key={lang.name}
							onPress={() => {
								i18n.changeLanguage(lang.name);
								I18nManager.forceRTL(lang.isRTL);
								I18nManager.allowRTL(lang.isRTL);
							}}
						>
							<AppText style={styles.label}>{lang.label}</AppText>
							{i18n.language === lang.name && (
								<MaterialCommunityIcons
									name='check'
									color={defalutStyle.colors.secondary}
									size={20}
								/>
							)}
						</Pressable>
					)}
				/>
				{/* {language.map((lang) => (

				))} */}
			</View>
		</FlatScreen>
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
	btnContainer: {
		borderRadius: 10,
		backgroundColor: defalutStyle.colors.white,
	},
	button: {
		padding: 20,
		// textAlign: I18nManager.isRTL ? 'right' : 'left',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	label: {
		flex: 1,
		alignSelf: 'flex-start',
	},
});
