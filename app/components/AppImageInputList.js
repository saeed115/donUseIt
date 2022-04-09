import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView, I18nManager } from 'react-native';

import AppImageInput from './AppImageInput';

const AppImageInputList = ({ imageUris = [], onAddImage, onRemoveImage, style }) => {
	const scrollView = useRef();
	return (
		<View>
			<ScrollView
				ref={scrollView}
				horizontal
				onContentSizeChange={() => scrollView.current.scrollToEnd()}
			>
				<View style={styles.imageContainer}>
					{imageUris.map((uri) => (
						<View key={uri} style={styles.image}>
							<AppImageInput
								style={style}
								imageUri={uri}
								onChangeImage={() => onRemoveImage(uri)}
							/>
						</View>
					))}

					<AppImageInput style={style} onChangeImage={(uri) => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
};

export default AppImageInputList;

const styles = StyleSheet.create({
	imageContainer: {
		flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
	},
	image: {
		marginRight: 10,
		flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
	},
});
