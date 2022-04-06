import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defalutStyle from '../config/defalutStyle';

const TabBarButton = ({ onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.button}>
				<MaterialCommunityIcons color='white' size={40} name='plus-circle' />
			</View>
		</TouchableWithoutFeedback>
	);
};

export default TabBarButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: defalutStyle.colors.primary,
		width: 80,
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 40,
		top: -25,
		borderWidth: 10,
		borderColor: defalutStyle.colors.white,
	},
});
