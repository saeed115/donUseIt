import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

const SubmitButton = ({ title, color, style }) => {
	const { handleSubmit } = useFormikContext();
	return <AppButton color={color} style={style} title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
