import React from 'react';
import { ImageBackground, StyleSheet, Image, View } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { useTranslation } from 'react-i18next';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen({ navigation }) {
	const { landscape } = useDeviceOrientation();
	const { t } = useTranslation();

	return (
		<ImageBackground blurRadius={3} source={require('../assets/bg.jpg')} style={styles.background}>
			<View
				style={{
					position: 'absolute',
					top: 30,
					alignItems: 'center',
				}}
			>
				<Image resizeMode='contain' style={styles.image} source={require('../assets/logo.png')} />
				<AppText style={styles.text}>{t('welcomeScreen.slug')}</AppText>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton
					style={{ width: landscape ? '65%' : '100%' }}
					title={t('welcomeScreen.loginBtn')}
					color='primary'
					onPress={() => navigation.navigate(t('common.login'))}
				/>
				<AppButton
					style={{ width: landscape ? '65%' : '100%' }}
					color='secondary'
					title={t('welcomeScreen.registerBtn')}
					onPress={() => navigation.navigate(t('common.register'))}
				/>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	image: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
		borderRadius: 10,
	},
	buttonContainer: {
		padding: 15,
		width: '100%',
		alignItems: 'center',
	},
	text: {
		fontSize: 25,
		color: colors.primary,
		textTransform: 'capitalize',
	},
});

export default WelcomeScreen;
