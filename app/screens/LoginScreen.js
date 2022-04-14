import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import auth from '../api/auth';
import Screen from '../components/Screen';
import { ErrorMessage, AppForm, AppFormField, SubmitButton } from '../components/Forms';
import defalutStyle from '../config/defalutStyle';
import useAuth from '../auth/useAuth';

const LoginScreen = () => {
	const { t } = useTranslation();

	const validationSchema = Yup.object().shape({
		username: Yup.string().required(() => t('errors.required')),
		password: Yup.string()
			.required(() => t('errors.required'))
			.min(4, () => t('errors.shortPass')),
	});

	const { logIn } = useAuth();

	const [hasError, setHasError] = useState(false);

	const handelSubmit = async ({ username, password }) => {
		const response = await auth.login(username, password);

		if (!response.ok) return setHasError(true);
		setHasError(false);

		logIn(response.data.data);
	};

	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo.png')} />
			<AppForm
				initialValues={{ username: '', password: '' }}
				onSubmit={handelSubmit}
				validationSchema={validationSchema}
			>
				<AppFormField
					name='username'
					autoCapitalize='none'
					autoCorrect={false}
					iconName='account'
					placeholder={t('forms.username')}
				/>

				<AppFormField
					name='password'
					autoCapitalize='none'
					autoCorrect={false}
					iconName='lock'
					placeholder={t('forms.password')}
					secureTextEntry
				/>

				<ErrorMessage error='Invalid Username/Password' visible={hasError} />

				<SubmitButton style={styles.button} color='secondary' title={t('loginScreen.btn')} />
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
		width: 100,
		height: 100,
		alignSelf: 'center',
		resizeMode: 'contain',
		marginBottom: 20,
		borderRadius: 10,
	},

	textButton: {
		color: defalutStyle.colors.secondary,
	},
});
