import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { string, object, ref } from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/Forms';
import { useTranslation } from 'react-i18next';
import auth from '../api/auth';
import useAuth from '../auth/useAuth';

const RegisterScreen = () => {
	const { t } = useTranslation();

	const validationSchema = object().shape({
		username: string()
			.trim()
			.required(() => t('errors.required')),
		email: string()
			.required(() => t('errors.required'))
			.email(() => t('errors.validEmail')),
		password: string()
			.required(() => t('errors.required'))
			.min(4, () => t('errors.shortPass')),
		passwordConfirm: string()
			.required(() => t('errors.required'))
			.min(4, () => t('errors.shortPass'))
			.oneOf([ref('password'), null], () => t('errors.passNotMatch')),
	});

	const [hasError, setHasError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	const { logIn } = useAuth();

	const handelSubmit = async (userInfo) => {
		delete userInfo.passwordConfirm;

		const result = await auth.register(userInfo);

		if (!result.ok) {
			if (result.data) {
				setHasError(true);
				setErrorMsg(result.data.message);
			} else {
				setErrorMsg('Unexpected error has happen');
				console.log(result);

				return;
			}
		}

		setHasError(false);

		const user = await auth.login(userInfo.username, userInfo.password);

		logIn(user.data.data);
	};

	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo.png')} />
			<AppForm
				initialValues={{ username: '', email: '', password: '', passwordConfirm: '' }}
				onSubmit={handelSubmit}
				validationSchema={validationSchema}
			>
				<AppFormField name='username' iconName='account' placeholder={t('forms.username')} />
				<AppFormField
					name='email'
					autoCapitalize='none'
					autoCorrect={false}
					iconName='email'
					placeholder={t('forms.email')}
					keyboardType='email-address'
				/>
				<AppFormField
					name='password'
					autoCapitalize='none'
					autoCorrect={false}
					iconName='lock'
					placeholder={t('forms.password')}
					secureTextEntry
				/>
				<AppFormField
					name='passwordConfirm'
					autoCapitalize='none'
					autoCorrect={false}
					iconName='lock'
					placeholder={t('forms.passwordConfirm')}
					secureTextEntry
				/>

				<ErrorMessage error={errorMsg} visible={hasError} />

				<SubmitButton color='secondary' title={t('registerScreen.btn')} />
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
		width: 100,
		height: 100,
		alignSelf: 'center',
		resizeMode: 'contain',
		marginBottom: 20,
		borderRadius: 10,
	},
});
