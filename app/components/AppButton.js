import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import defalutStyle from '../config/defalutStyle';

export default function AppButton({ title, onPress, color, style }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: defalutStyle.colors[color] }, style]}
			onPress={onPress}
		>
			<AppText style={[styles.text, style]}>{title}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: defalutStyle.colors.primary,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		marginVertical: 10,
	},

	text: {
		color: defalutStyle.colors.white,
		fontSize: 18,
		fontWeight: 'bold',
	},
});
