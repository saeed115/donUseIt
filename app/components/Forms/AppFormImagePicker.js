import React from 'react';
import { useFormikContext } from 'formik';

import AppImageInputList from '../AppImageInputList';
import ErrorMessage from './ErrorMessage';

const AppFormImagePicker = ({ name, style }) => {
	const { errors, touched, values, setFieldValue } = useFormikContext();
	const imageUris = values[name];

	console.log(imageUris);
	const handelAdd = async (uri) => {
		const newFile = {
			uri,
			name: `test.${uri.split('.')[1]}`,
			type: `test/${uri.split('.')[1]}`,
		};

		const url = await handelUploadImage(newFile);

		imageUris.push(url);

		setFieldValue(name, [...imageUris]);
	};

	const handelUploadImage = async (img) => {
		const data = new FormData();

		data.append('file', img);
		data.append('upload_preset', 'googoapp');
		data.append('cloud_name', 'dpplga3pz');

		return fetch('https://api.cloudinary.com/v1_1/dpplga3pz/image/upload', {
			method: 'post',
			body: data,
		})
			.then((res) => res.json())
			.then((imageData) => imageData.url);
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
