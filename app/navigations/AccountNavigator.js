import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MessagesScreen from '../screens/MessagesScreen';
import AccountScreen from '../screens/AccountScreen';
import { t } from '../localizations';
import SettingScreen from '../screens/SettingScreen';

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
			<Stack.Screen
				// options={{
				// 	headerShown: false,
				// }}
				name={t('routes.setting')}
				component={SettingScreen}
			/>
		</Stack.Navigator>
	);
};

export default AccountNavigator;
