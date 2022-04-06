import React from 'react';
import { Formik } from 'formik';

const AppForm = ({ validationSchema, onSubmit, initialValues, children }) => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{() => <React.Fragment>{children}</React.Fragment>}
		</Formik>
	);
};

export default AppForm;
