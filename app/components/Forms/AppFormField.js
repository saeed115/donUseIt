import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({ name, style, ...otherProps }) => {
	const { handleChange, errors, touched, values, setFieldTouched } = useFormikContext();
	return (
		<React.Fragment>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				value={values[name]}
				style={style}
				{...otherProps}
			/>
			<ErrorMessage visible={touched[name]} error={errors[name]} />
		</React.Fragment>
	);
};

export default AppFormField;
