import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import defalutStyle from '../config/defalutStyle';
import listingApi from '../api/listingApi';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import useApi from '../hooks/useApi';
import { t } from '../localizations';

const ListingsScreen = ({ navigation }) => {
	const { error, data: listings, requset: getListing, loading } = useApi(listingApi.getListing);

	useEffect(() => {
		getListing();
	}, []);

	return (
		<Screen style={{ ...styles.screen, flex: error || loading ? 1 : 0 }}>
			{loading && (
				<View style={styles.errors}>
					<ActivityIndicator animating={loading} size={70} color={defalutStyle.colors.primary} />
				</View>
			)}

			{error && (
				<View style={styles.errors}>
					<AppText>هنالك مشكلة في جلب البيانات</AppText>
					<AppButton
						style={{ width: '75%' }}
						color='primary'
						width='20%'
						onPress={getListing}
						title='اعادة المحاولة'
					/>
				</View>
			)}

			{listings.map((listing) => (
				<Card
					key={listing.id}
					style={{ backgroundColor: defalutStyle.colors.white }}
					title={listing.title}
					subTitle={'$' + listing.price}
					imageUrl={listing.images[0]}
					onPress={() => navigation.navigate(t('routes.listing_details'), listing)}
				/>
			))}
		</Screen>
	);
};

export default ListingsScreen;

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: defalutStyle.colors.light,
	},

	errors: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
