import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import AppText from '../components/AppText';
import FullScreen from '../components/FullScreen';
import ListItem from '../components/Lists/ListItem';
import colors from '../config/colors';
import defalutStyle from '../config/defalutStyle';
import { IMLocalized as t } from '../localizations';

const ListingDetailsScreen = ({ route }) => {
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
						title={t('accountScreen.userTitle')}
						subTitle={t('accountScreen.userSubTitle')}
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
		textAlign: 'right',
	},
	description: {
		paddingTop: 10,
	},
});
