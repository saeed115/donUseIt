import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import FlatScreen from '../components/FlatScreen';

import ListItem from '../components/Lists/ListItem';
import ListItemSeparator from '../components/Lists/ListItemSeparator';
import defalutStyle from '../config/defalutStyle';

const messagesArray = [
	{
		id: '1',
		title: 'الرسالة 1',
		desc: 'نص الرسالة الاولي',
		image: require('../assets/user.jpg'),
	},
	{
		id: '2',
		title: 'الرسالة 2',
		desc: 'نص الرسالة الثانية',
		image: require('../assets/user.jpg'),
	},
];
const MessagesScreen = () => {
	const [messages, setMessages] = useState(messagesArray);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		setMessages(messages.filter((m) => m.id !== message.id));
	};

	return (
		<FlatScreen style={styles.container}>
			<FlatList
				data={messages}
				renderItem={({ item }) => (
					<ListItem
						style={styles.listItem}
						onPress={() => console.log()}
						image={item.image}
						title={item.title}
						subTitle={item.desc}
					/>
				)}
				keyExtractor={(message) => message.id.toString()}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: '2',
							title: 'الرسالة 2',
							desc: 'نص الرسالة الثانية',
							image: require('../assets/user.jpg'),
						},
					]);
				}}
			/>
		</FlatScreen>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({
	listItem: { backgroundColor: defalutStyle.colors.white, padding: 15 },
});
