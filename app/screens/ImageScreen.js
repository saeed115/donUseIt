import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ImageScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<View style={styles.colesIcon}>
					<MaterialCommunityIcons name='close' color={colors.white} size={35} />
				</View>
				<View style={styles.deleteIcon}>
					<MaterialCommunityIcons name='trash-can-outline' color={colors.white} size={35} />
				</View>
			</View>
			<Image style={styles.image} source={require('../assets/image.jpg')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black,
		// top: StatusBar.currentHeight,
	},
	iconContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		padding: 20,
	},
	colesIcon: {
		width: '15%',
		height: 50,
	},
	deleteIcon: {
		width: '15%',
		height: 50,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
});

export default ImageScreen;
