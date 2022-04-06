import React from 'react';
import { useFormikContext } from 'formik';

import AppImageInputList from '../AppImageInputList';
import ErrorMessage from './ErrorMessage';

const AppFormImagePicker = ({ name, style }) => {
	const { errors, touched, values, setFieldValue } = useFormikContext();
	const imageUris = values[name];

	const handelAdd = (uri) => {
		setFieldValue(name, [...imageUris, uri]);
	};

	const handelRemove = (uri) => {
		setFieldValue(
			name,
			imageUris.filter((imageUri) => imageUri !== uri)
		);
	};

	return (
		<React.Fragment>
			<AppImageInputList
				imageUris={imageUris}
				onAddImage={handelAdd}
				onRemoveImage={handelRemove}
				style={style}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</React.Fragment>
	);
};

export default AppFormImagePicker;
