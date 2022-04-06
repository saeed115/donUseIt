import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Constants from 'expo-constants';
import defalutStyle from '../config/defalutStyle';

const FlatScreen = ({ children }) => {
	return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default FlatScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: defalutStyle.colors.light,
		// paddingHorizontal: 20,
	},
});
