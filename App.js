import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { init } from './app/localizations';
import AppNavigation from './app/navigations/AppNavigation';
import navigationTheme from './app/navigations/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';

export default function App() {
	init();
	return (
		<React.Fragment>
			<NavigationContainer theme={navigationTheme}>
				<AppNavigation />
			</NavigationContainer>

			<OfflineNotice />
		</React.Fragment>
	);
}
