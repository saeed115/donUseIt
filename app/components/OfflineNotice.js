import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';
import { useTranslation } from 'react-i18next';

import colors from '../config/colors';
import AppText from './AppText';

const OfflineNotice = () => {
	const netInfo = useNetInfo();
	const { t } = useTranslation();
	if (netInfo.type !== 'unKnown' && netInfo.isInternetReachable === false) {
		return (
			<View style={styles.container}>
				<AppText style={styles.text}>{t('errors.noInternet')}</AppText>
			</View>
		);
	}

	return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		width: '100%',
		height: 50,
		zIndex: 10,
		top: Constants.statusBarHeight,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: colors.white,
	},
});
