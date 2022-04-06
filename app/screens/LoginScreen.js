import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/Forms';
import defalutStyle from '../config/defalutStyle';

const validationSchema = Yup.object().shape({
	email: Yup.string().required('هذا الحقل مطلوب').email('الرجاء ادخال بريد صالح'),
	password: Yup.string().required('هذا الحقل مطلوب').min(4, 'كلمة المرور قصيرة'),
});

const LoginScreen = ({ navigation }) => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo.png')} />
			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
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

				<SubmitButton style={styles.button} color='primary' title='تسجيل دخول' />
			</AppForm>
		</Screen>
	);
};

export default LoginScreen;

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

	textButton: {
		color: defalutStyle.colors.secondary,
	},
});
