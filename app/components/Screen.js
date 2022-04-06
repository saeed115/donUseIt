import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children, style }) => {
	return (
		<SafeAreaView style={styles.screen}>
			<ScrollView contentContainerStyle={style}>{children}</ScrollView>
		</SafeAreaView>
	);
};

export default Screen;

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
