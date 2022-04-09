import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, I18nManager, Image } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

const Card = ({ imageUrl, title, subTitle, style, onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={[styles.container, style]}>
				<Image style={styles.image} source={{ uri: imageUrl }} />
				<View style={styles.footer}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText style={styles.subTitle}>{subTitle}</AppText>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default Card;

const styles = StyleSheet.create({
	container: {
		marginBottom: 25,
		borderRadius: 10,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 200,
	},
	footer: {
		padding: 20,
	},
	title: {
		fontWeight: 'bold',
	},
	subTitle: {
		paddingTop: 15,
		color: colors.primary,
		textAlign: I18nManager ? 'left' : 'auto',
	},
});
