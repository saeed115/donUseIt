import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

const FullScreen = ({ children, style }) => {
	return <ScrollView style={[styles.screen, style]}>{children}</ScrollView>;
};

export default FullScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
