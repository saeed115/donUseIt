import React from 'react';

import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { t } from '../localizations';
import ListingEditScreen from '../screens/ListingEditScreen';
import defalutStyle from '../config/defalutStyle';
import FeedNavigation from './FeedNavigation';
import TabBarButton from './TabBarButton';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tab.Screen
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons color={color} size={size} name='home' />
					),
				}}
				name={t('routes.home')}
				component={FeedNavigation}
			/>
			<Tab.Screen
				options={({ navigation }) => ({
					tabBarButton: () => (
						<TabBarButton onPress={() => navigation.navigate(t('routes.listing_edit'))} />
					),

					tabBarIcon: () => <View style={styles.iconContainer}></View>,
				})}
				name={t('routes.listing_edit')}
				component={ListingEditScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons color={color} size={size} name='account' />
					),
				}}
				name={t('routes.account')}
				component={AccountNavigator}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigation;

const styles = StyleSheet.create({
	tabIconStyle: {
		top: -20,
		backgroundColor: defalutStyle.colors.white,
		width: 70,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		position: 'absolute',
		padding: 20,
	},
	iconContainer: {
		backgroundColor: defalutStyle.colors.primary,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	},
});
