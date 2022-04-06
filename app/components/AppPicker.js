import React, { useState } from 'react';
import { StyleSheet, FlatList, Button, View, TouchableWithoutFeedback, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import defalutStyle from '../config/defalutStyle';
import PickerItem from './PickerItem';

const AppPicker = ({
	iconName,
	placeholder,
	items,
	selectedItem,
	PickerItemComponent = PickerItem,
	onSelectItem,
	numOfColumns = 1,
	style,
}) => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, style]}>
					<View style={styles.text}>
						{iconName && (
							<MaterialCommunityIcons
								style={styles.icon}
								color={defalutStyle.colors.medium}
								name={iconName}
								size={25}
							/>
						)}

						{selectedItem ? (
							<AppText style={styles.text}>{selectedItem.label}</AppText>
						) : (
							<AppText style={styles.placeholder}>{placeholder}</AppText>
						)}
					</View>

					<MaterialCommunityIcons
						color={defalutStyle.colors.medium}
						name='chevron-down'
						size={25}
					/>
				</View>
			</TouchableWithoutFeedback>

			<Modal
				visible={modalVisible}
				animationType='slide'
				onRequestClose={() => {
					setModalVisible(false);
				}}
			>
				<FlatList
					data={items}
					keyExtractor={(item) => item.value.toString()}
					numColumns={numOfColumns}
					renderItem={({ item }) => (
						<PickerItemComponent
							item={item}
							label={item.label}
							onPress={() => {
								setModalVisible(false);
								onSelectItem(item);
							}}
						/>
					)}
				/>

				<Button
					color={defalutStyle.colors.danger}
					title='قفل'
					onPress={() => setModalVisible(false)}
				/>
			</Modal>
		</React.Fragment>
	);
};

export default AppPicker;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderRadius: 15,
		backgroundColor: defalutStyle.colors.light,
		width: '100%',
		marginBottom: 15,
		padding: 15,
	},
	icon: {
		marginStart: 10,
	},
	placeholder: {
		flex: 1,
		color: defalutStyle.colors.medium,
	},
	text: {
		flexDirection: 'row',
		flex: 1,
	},
	modal: {
		padding: 20,
	},
});
