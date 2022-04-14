import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Constants from 'expo-constants';

const FlatScreen = ({ children, style }) => {
	return (
		<SafeAreaView style={styles.screen}>
			<View style={style}>{children}</View>
		</SafeAreaView>
	);
};

export default FlatScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
	container: {
		paddingTop: 20,
		paddingHorizontal: 20,
	},
});
