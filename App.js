import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

// import { init } from './app/localizations';
import './app/i18n';
import AppNavigation from './app/navigations/AppNavigation';
import navigationTheme from './app/navigations/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigation from './app/navigations/AuthNavigation';
import AuthContext from './app/auth/AuthContext';
import authStorage from './app/auth/storage';

export default function App() {
	// init();

	const [user, setUser] = useState();
	const [isReady, setIsReady] = useState(false);

	const restoreUser = async () => {
		const userInfo = await authStorage.getUser();
		if (userInfo) setUser(userInfo);
	};

	if (!isReady)
		return (
			<AppLoading
				startAsync={restoreUser}
				onFinish={() => setIsReady(true)}
				onError={console.warn}
			/>
		);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<NavigationContainer theme={navigationTheme}>
				{user ? <AppNavigation /> : <AuthNavigation />}
			</NavigationContainer>

			<OfflineNotice />
		</AuthContext.Provider>
	);
}
