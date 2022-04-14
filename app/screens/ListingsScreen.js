import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';

import Card from '../components/Card';
import defalutStyle from '../config/defalutStyle';
import listingApi from '../api/listingApi';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import useApi from '../hooks/useApi';
import { useTranslation } from 'react-i18next';
import Empty from '../components/Empty';
import FlatScreen from '../components/FlatScreen';

const ListingsScreen = ({ navigation }) => {
	const { t } = useTranslation();

	const [refreshing, setRefreshing] = useState(false);

	const { error, data: listings, requset: getListing, loading } = useApi(listingApi.getListing);

	useEffect(() => {
		getListing();
	}, []);

	const renderListings = () => {
		if (loading) {
			return (
				<View style={styles.errors}>
					<ActivityIndicator animating={loading} size={70} color={defalutStyle.colors.primary} />
				</View>
			);
		} else if (error) {
			return (
				<View style={styles.errors}>
					<AppText>{t('errors.serverError')}</AppText>
					<AppButton
						style={{ width: '75%' }}
						color='primary'
						width='20%'
						onPress={getListing}
						title={t('errors.retry')}
					/>
				</View>
			);
		} else if (listings != '') {
			return (
				<FlatList
					data={listings}
					keyExtractor={(listing) => listing.id.toString()}
					refreshing={refreshing}
					onRefresh={() => getListing()}
					renderItem={({ item }) => (
						<Card
							key={item.id}
							style={{ backgroundColor: defalutStyle.colors.white }}
							title={item.title}
							subTitle={'$' + item.price}
							imageUrl={item.images[0]}
							onPress={() => navigation.navigate(t('routes.listing_details'), item)}
						/>
					)}
				/>
			);
		} else {
			return (
				<>
					<Empty title={t('listingsScreen.empty')} />
				</>
			);
		}
	};

	return <FlatScreen style={styles.screen}>{renderListings()}</FlatScreen>;
};

export default ListingsScreen;

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: defalutStyle.colors.light,
		flex: 1,
	},

	errors: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
