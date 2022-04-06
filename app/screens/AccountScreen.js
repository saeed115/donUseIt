import React from 'react';
import { StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/Lists/ListItem';
import Icon from '../components/Icon';
import defalutStyle from '../config/defalutStyle';
import { IMLocalized as t } from '../localizations';

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
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					style={styles.listItem}
					title={t('accountScreen.userTitle')}
					subTitle={t('accountScreen.userSubTitle')}
					image={require('../assets/user.jpg')}
				/>
			</View>

			{items.map((item) => (
				<ListItem
					key={item.title}
					style={styles.listItem}
					title={item.title}
					subTitle={item.subTitle}
					onPress={() => navigation.navigate(t('routes.messages'))}
					IconComponent={
						<Icon name={item.icon.name} size={50} backgroundColor={item.icon.backgroundColor} />
					}
				/>
			))}

			<View style={styles.container}>
				<ListItem
					style={styles.listItem}
					title={t('accountScreen.logout')}
					IconComponent={<Icon name='logout' size={50} backgroundColor='#ffe66d' />}
				/>
			</View>
		</Screen>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: defalutStyle.colors.light,
		paddingHorizontal: 15,
	},
	container: {
		marginBottom: 20,
	},
	listItem: {
		borderRadius: 10,
		backgroundColor: defalutStyle.colors.white,
		padding: 15,
		marginTop: 15,
	},
});
