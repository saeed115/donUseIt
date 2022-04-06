import React from 'react';
import { Text, View } from 'react-native';

import defalutStyle from '../config/defalutStyle';

export default function AppText({ children, style, ...otherProps }) {
	return (
		<View>
			<Text style={[defalutStyle.text, style]} {...otherProps}>
				{children}
			</Text>
		</View>
	);
}
