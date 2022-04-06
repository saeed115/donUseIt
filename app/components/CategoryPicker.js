import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from './Icon';
import AppText from './AppText';

const CategoryPicker = ({ item, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Icon name={item.icon} size={60} backgroundColor={item.backgroundColor} />
			<AppText style={styles.label}>{item.label}</AppText>
		</TouchableOpacity>
	);
};

export default CategoryPicker;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 15,
		alignItems: 'center',
		flex: 1,
	},
	label: {
		marginTop: 5,
	},
});
