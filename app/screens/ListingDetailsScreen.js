import React from 'react';
import { StyleSheet, View, Image, I18nManager } from 'react-native';

import AppText from '../components/AppText';
import FullScreen from '../components/FullScreen';
import ListItem from '../components/Lists/ListItem';
import colors from '../config/colors';
import defalutStyle from '../config/defalutStyle';
import useAuth from '../auth/useAuth';

const ListingDetailsScreen = ({ route }) => {
	const { user } = useAuth();
	const listing = route.params;

	return (
		<FullScreen style={styles.screen}>
			<Image style={styles.image} source={{ uri: listing.images[0] }} />
			<View style={{ padding: 20 }}>
				<View style={styles.footer}>
					<AppText style={styles.title}>{listing.title}</AppText>
					<AppText style={styles.subTitle}>{'$' + listing.price}</AppText>
				</View>

				<View>
					{listing.description && (
						<AppText style={styles.description}>{listing.description}</AppText>
					)}
				</View>
				<View style={{ marginVertical: 30 }}>
					<ListItem
						style={styles.listItem}
						title={user.username}
						subTitle={user.email}
						image={require('../assets/user.jpg')}
					/>
				</View>
			</View>
		</FullScreen>
	);
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
	screen: {
		backgroundColor: defalutStyle.colors.light,
	},
	image: {
		width: '100%',
		height: 300,
	},
	title: {
		paddingBottom: 10,
		fontWeight: 'bold',
	},
	subTitle: {
		paddingTop: 10,
		color: colors.primary,
		textAlign: I18nManager ? 'left' : 'auto',
	},
	description: {
		paddingTop: 10,
	},
});
