import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../AppText';

const ErrorMessage = ({ error, visible }) => {
	if (!visible || !error) return null;

	return <AppText style={styles.text}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
	text: {
		color: 'red',
		marginBottom: 10,
		paddingStart: 15,
	},
});
