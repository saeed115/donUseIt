import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MessagesScreen from '../screens/MessagesScreen';
import AccountScreen from '../screens/AccountScreen';
import { IMLocalized as t } from '../localizations';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name={t('routes:account')}
				component={AccountScreen}
			/>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name={t('routes.messages')}
				component={MessagesScreen}
			/>
		</Stack.Navigator>
	);
};

export default AccountNavigator;
