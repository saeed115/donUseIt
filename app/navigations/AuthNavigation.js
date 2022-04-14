import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
	const { t } = useTranslation();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Welcome'
				component={WelcomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen name={t('common.login')} component={LoginScreen} />
			<Stack.Screen name={t('common.register')} component={RegisterScreen} />
		</Stack.Navigator>
	);
};

export default AuthNavigation;
