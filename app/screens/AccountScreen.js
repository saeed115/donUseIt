import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

import { useTranslation } from 'react-i18next';
import ListItem from '../components/Lists/ListItem';
import Icon from '../components/Icon';
import defalutStyle from '../config/defalutStyle';
import FullScreen from '../components/FullScreen';
import AppText from '../components/AppText';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';

const AccountScreen = ({ navigation }) => {
	const { user, logOut } = useAuth();
	const { t } = useTranslation();

	return (
		<>
			<ImageBackground
				blurRadius={3}
				source={require('../assets/bg.jpg')}
				style={styles.background}
			>
				<Image style={styles.userImage} source={require('../assets/user.jpg')} />
				<AppText style={styles.title}>{user.username}</AppText>
				<AppText style={styles.subTitle}>{user.email}</AppText>
			</ImageBackground>

			<FullScreen style={styles.screen}>
				<View style={{ padding: 15 }}>
					<View style={styles.container}>
						<ListItem
							style={styles.listItem}
							title={t('accountScreen.listings')}
							IconComponent={
								<Icon name='format-list-bulleted' size={50} backgroundColor={colors.secondary} />
							}
						/>
					</View>

					<View style={styles.container}>
						<ListItem
							style={styles.listItem}
							title={t('accountScreen.messages')}
							onPress={() => navigation.navigate(t('routes.messages'))}
							IconComponent={<Icon name='email' size={50} backgroundColor={colors.primary} />}
						/>
					</View>

					<View style={styles.container}>
						<ListItem
							style={styles.listItem}
							title={t('accountScreen.setting')}
							onPress={() => navigation.navigate(t('routes.setting'))}
							IconComponent={<Icon name='cogs' size={50} backgroundColor='#0984e3' />}
						/>
					</View>

					<View style={styles.container}>
						<ListItem
							style={styles.listItem}
							title={t('accountScreen.logout')}
							onPress={() => logOut()}
							IconComponent={<Icon name='logout' size={50} backgroundColor='#ffe66d' />}
						/>
					</View>
				</View>
			</FullScreen>
		</>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: defalutStyle.colors.light,
	},
	background: {
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
		resizeMode: 'contain',
	},
	container: {
		marginVertical: 10,
	},
	listItem: {
		borderRadius: 10,
		backgroundColor: defalutStyle.colors.white,
		padding: 15,
	},
	userImage: {
		borderRadius: 50,
		height: 80,
		width: 80,
		marginBottom: 15,
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		color: defalutStyle.colors.primary,
	},
	subTitle: {
		color: defalutStyle.colors.primary,
	},
});
