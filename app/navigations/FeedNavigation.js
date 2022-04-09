import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import { t } from '../localizations';

const Stack = createNativeStackNavigator();

const FeedNavigation = () => {
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
