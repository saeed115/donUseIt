import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Alert, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import defalutStyle from '../config/defalutStyle';

const AppImageInput = ({ imageUri, onChangeImage, style }) => {
	const requsetPermission = async () => {
		const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (!granted) {
			alert('يجب اعاء الصلاحية للدخول للمكتبة');
		}
	};

	const handelPress = () => {
		if (!imageUri) selectImage();
		else
			Alert.alert('حذف', 'هل متأكد من حذف الصورة', [
				{ text: 'نعم', onPress: () => onChangeImage(null) },
				{ text: 'الغاء' },
			]);
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync();

			if (!result.cancelled) onChangeImage(result.uri);
		} catch (error) {
			console.log('no image selected');
		}
	};

	useEffect(() => {
		requsetPermission();
	}, []);

	return (
		<TouchableWithoutFeedback onPress={handelPress}>
			<View style={[styles.container, style]}>
				{!imageUri && (
					<MaterialCommunityIcons name='camera' color={defalutStyle.colors.medium} size={40} />
				)}

				{imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default AppImageInput;

const styles = StyleSheet.create({
	container: {
		width: 80,
		height: 80,
		borderRadius: 15,
		marginBottom: 15,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});
