import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defalutStyle from '../config/defalutStyle';

const AppTextInput = ({ value, iconName, style, ...otherProps }) => {
	return (
		<View style={[styles.container, style]}>
			{iconName && (
				<MaterialCommunityIcons
					style={styles.icon}
					color={defalutStyle.colors.medium}
					name={iconName}
					size={25}
				/>
			)}
			<TextInput
				placeholderTextColor={defalutStyle.colors.medium}
				style={[defalutStyle.text, styles.text]}
				value={value}
				{...otherProps}
			/>
		</View>
	);
};

export default AppTextInput;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderRadius: 15,
		backgroundColor: defalutStyle.colors.light,
		width: '100%',
		marginBottom: 15,
		alignItems: 'center',
	},
	icon: {
		paddingRight: 15,
	},
	text: {
		flex: 1,
		// textAlign: 'right',
		padding: 15,
	},
});
