import React from 'react';
import { StyleSheet, View } from 'react-native';
import { object, string, number, array } from 'yup';

import {
	AppForm as Form,
	AppFormField as FormField,
	AppFormPicker as Picker,
	SubmitButton,
} from '../components/Forms';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import defalutStyle from '../config/defalutStyle';
import CategoryPicker from '../components/CategoryPicker';
import AppFormImagePicker from '../components/Forms/AppFormImagePicker';
import useLocation from '../hooks/useLocation';
import listingApi from '../api/listingApi';
import { t } from '../localizations';

const validationSchema = object().shape({
	title: string()
		.required(() => t('errors.required'))
		.min(3, 'العنوان اكبر من او يساوي 3 احرف'),
	price: number()
		.required(() => t('errors.required'))
		.min(1)
		.max(10000, 'السعر اصغر من او يساوي 10000'),
	description: string(),
	category: object()
		.required(() => t('errors.required'))
		.nullable(),
	images: array().min(1, () => t('errors.imageRequired')),
});

const categories = [
	{
		backgroundColor: '#fc5c65',
		icon: 'floor-lamp',
		label: 'اثاث',
		value: 1,
	},
	{
		backgroundColor: '#fd9644',
		icon: 'car',
		label: 'سيارات',
		value: 2,
	},
	{
		backgroundColor: '#fed330',
		icon: 'camera',
		label: 'كاميرات',
		value: 3,
	},
	{
		backgroundColor: '#26de81',
		icon: 'cards',
		label: 'العاب',
		value: 4,
	},
	{
		backgroundColor: '#2bcbba',
		icon: 'shoe-heel',
		label: 'ملابس',
		value: 5,
	},
	{
		backgroundColor: '#45aaf2',
		icon: 'basketball',
		label: 'رياضة',
		value: 6,
	},
	{
		backgroundColor: '#4b7bec',
		icon: 'headphones',
		label: 'موسيقى و افلام',
		value: 7,
	},
	{
		backgroundColor: '#a55eea',
		icon: 'book-open-variant',
		label: 'كتب',
		value: 8,
	},
	{
		backgroundColor: '#778ca3',
		icon: 'application',
		label: 'اخري',
		value: 9,
	},
];

const ListingEditScreen = () => {
	const location = useLocation();

	const handleSubmit = async (listing, { resetForm }) => {
		const result = await listingApi.addListing({ ...listing, location });
		console.log(result.status);
		console.log(result.originalError);

		if (!result.ok) return alert('لم يتم الحفظ');

		alert('تم الحفظ');
		resetForm();
	};

	return (
		<Screen style={styles.container}>
			<View style={styles.textContainer}>
				<AppText style={styles.text}>{t('listingEditScreen.pageTitle')}</AppText>
				<AppText>{t('listingEditScreen.pageSubTitle')}</AppText>
			</View>
			<Form
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
					images: [],
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<AppFormImagePicker style={styles.formField} name='images' />
				<FormField
					style={styles.formField}
					maxLength={255}
					name='title'
					placeholder={t('listingEditScreen.titlePlaceholder')}
				/>

				<FormField
					style={styles.formField}
					keyboardType='numeric'
					maxLength={8}
					name='price'
					placeholder={t('listingEditScreen.pricePlaceholder')}
				/>

				<Picker
					PickerItemComponent={CategoryPicker}
					items={categories}
					numOfColumns={3}
					name='category'
					placeholder={t('listingEditScreen.categoryPlaceholder')}
					style={styles.formField}
				/>

				<FormField
					style={styles.formField}
					maxLength={255}
					multiline
					name='description'
					numberOfLines={3}
					placeholder={t('listingEditScreen.descPlaceholder')}
				/>
				<SubmitButton color='secondary' title={t('listingEditScreen.btnTitle')} />
			</Form>
		</Screen>
	);
};

export default ListingEditScreen;

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: defalutStyle.colors.light,
	},
	textContainer: {
		paddingBottom: 20,
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
		color: defalutStyle.colors.medium,
	},
	formField: {
		backgroundColor: defalutStyle.colors.white,
	},
});
