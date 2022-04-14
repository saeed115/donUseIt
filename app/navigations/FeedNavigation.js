import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

const FeedNavigation = () => {
	const { t } = useTranslation();

	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{ headerShown: false }}
				name={t('routes.listings')}
				component={ListingsScreen}
			/>
			<Stack.Screen
				// options={{ headerShown: false }}
				name={t('routes.listing_details')}
				component={ListingDetailsScreen}
			/>
		</Stack.Navigator>
	);
};

export default FeedNavigation;
