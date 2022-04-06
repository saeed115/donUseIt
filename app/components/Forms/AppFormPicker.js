import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ items, style, name, numOfColumns, PickerItemComponent, placeholder }) {
	const { errors, setFieldValue, touched, values } = useFormikContext();

	return (
		<React.Fragment>
			<AppPicker
				items={items}
				numOfColumns={numOfColumns}
				PickerItemComponent={PickerItemComponent}
				onSelectItem={(item) => setFieldValue(name, item)}
				placeholder={placeholder}
				selectedItem={values[name]}
				style={style}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</React.Fragment>
	);
}

export default AppFormPicker;
