import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

import ListItem from '../components/Lists/ListItem';
import Icon from '../components/Icon';
import defalutStyle from '../config/defalutStyle';
import { t } from '../localizations';
import FullScreen from '../components/FullScreen';
import AppText from '../components/AppText';

const AccountScreen = ({ navigation }) => {
	const items = [
		{
			title: t('accountScreen.listings'),
			icon: {
				name: 'format-list-bulleted',
				backgroundColor: defalutStyle.colors.primary,
			},
		},
		{
			title: t('accountScreen.messages'),
			icon: {
				name: 'email',
				backgroundColor: defalutStyle.colors.secondary,
			},
		},
	];

	return (
		<>
			<ImageBackground
				blurRadius={3}
				source={require('../assets/bg.jpg')}
				style={styles.background}
			>
				<Image style={styles.userImage} source={require('../assets/user.jpg')} />
				<AppText style={styles.title}>{t('accountScreen.userTitle')}</AppText>
				<AppText style={styles.subTitle}>{t('accountScreen.userSubTitle')}</AppText>
			</ImageBackground>

			<FullScreen style={styles.screen}>
				<View style={{ padding: 15 }}>
					{items.map((item) => (
						<View key={item.title} style={styles.container}>
							<ListItem
								key={item.title}
								style={styles.listItem}
								title={item.title}
								subTitle={item.subTitle}
								onPress={() => navigation.navigate(t('routes.messages'))}
								IconComponent={
									<Icon
										name={item.icon.name}
										size={50}
										backgroundColor={item.icon.backgroundColor}
									/>
								}
							/>
						</View>
					))}

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
