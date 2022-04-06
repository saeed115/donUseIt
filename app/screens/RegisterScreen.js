import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { string, object, ref } from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/Forms';

const validationSchema = object().shape({
	userName: string().trim().required('هذا الحقل مطلوب'),
	email: string().required('هذا الحقل مطلوب').email('الرجاء ادخال بريد صالح'),
	password: string().required('هذا الحقل مطلوب').min(4, 'كلمة المرور قصيرة'),
	passwordConfirm: string()
		.required('هذا الحقل مطلوب')
		.min(4, 'كلمة المرور قصيرة')
		.oneOf([ref('password'), null], 'كلمة المرور ليست متطابقة'),
});

const RegisterScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo.png')} />
			<AppForm
				initialValues={{ userName: '', email: '', password: '', passwordConfirm: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField name='userName' iconName='account' placeholder='اسم المستخدم' />

				<AppFormField
					name='email'
					autoCapitalize='none'
					autoCorrect={false}
					iconName='email'
					placeholder='البريد الإلكتروني'
					keyboardType='email-address'
				/>

				<AppFormField
					name='password'
					autoCapitalize='none'
					autoCorrect={false}
					iconName='lock'
					placeholder='كلمة المرور'
					secureTextEntry
				/>

				<AppFormField
					name='passwordConfirm'
					autoCapitalize='none'
					autoCorrect={false}
					iconName='lock'
					placeholder=' تأكيد كلمة المرور'
					secureTextEntry
				/>

				<SubmitButton color='primary' title='تسجيل' />
			</AppForm>
		</Screen>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	container: {
		padding: 20,
		justifyContent: 'center',
	},
	logo: {
		width: 150,
		height: 150,
		alignSelf: 'center',
		resizeMode: 'contain',
		marginBottom: 20,
		borderRadius: 20,
	},
});
