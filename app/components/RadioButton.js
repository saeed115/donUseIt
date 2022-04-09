import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

const RadioButton = ({ selected, onPress, title }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<AppText style={styles.text}>{title}</AppText>

			<View style={styles.outerContainer}>
				{selected ? <View style={styles.innerContainer} /> : null}
			</View>
		</TouchableOpacity>
	);
};

export default RadioButton;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		flex: 1,
		marginBottom: 15,
	},
	outerContainer: {
		height: 24,
		width: 24,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	innerContainer: {
		height: 12,
		width: 12,
		borderRadius: 6,
		backgroundColor: colors.primary,
	},
});
