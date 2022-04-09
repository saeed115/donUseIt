import React from 'react';
import { StyleSheet, Image, I18nManager, View, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import defalutStyle from '../../config/defalutStyle';

const ListItem = ({ title, subTitle, image, onPress, IconComponent, style }) => {
	return (
		<TouchableHighlight
			style={{ borderRadius: 10 }}
			underlayColor={defalutStyle.colors.secondary}
			onPress={onPress}
		>
			<View style={[styles.container, style]}>
				{IconComponent}
				{image && <Image style={styles.image} source={image} />}
				<View style={styles.detailContainer}>
					<AppText style={styles.title} numberOfLines={1}>
						{title}
					</AppText>
					{subTitle && (
						<AppText style={styles.subTitle} numberOfLines={2}>
							{subTitle}
						</AppText>
					)}
				</View>
				<MaterialCommunityIcons
					color={defalutStyle.colors.medium}
					size={20}
					name={I18nManager.isRTL ? 'chevron-left' : 'chevron-right'}
				/>
			</View>
		</TouchableHighlight>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		borderRadius: 50,
		width: 60,
		height: 60,
	},
	detailContainer: {
		marginStart: 15,
		justifyContent: 'center',
		flex: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: '600',
	},
	subTitle: {
		color: defalutStyle.colors.medium,
	},
});
