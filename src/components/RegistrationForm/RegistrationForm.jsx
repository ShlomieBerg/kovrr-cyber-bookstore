import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css';

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	phoneNumber: Yup.string()
		.matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
		.required('Phone number is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	address: Yup.string().required('Address is required'),
});

const RegistrationForm = ({ handleSubmit }) => {
	const initialValues = {
		name: '',
		phoneNumber: '',
		email: '',
		address: '',
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form>
				<div>
					<label htmlFor="name" className="formLabel">
						Name
					</label>
					<Field type="text" id="name" name="name" />
					<ErrorMessage name="name" component="div" className="error" />
				</div>

				<div>
					<label htmlFor="phoneNumber" className="formLabel">
						Phone Number
					</label>
					<Field type="text" id="phoneNumber" name="phoneNumber" />
					<ErrorMessage name="phoneNumber" component="div" className="error" />
				</div>

				<div>
					<label htmlFor="email" className="formLabel">
						Email
					</label>
					<Field type="text" id="email" name="email" />
					<ErrorMessage name="email" component="div" className="error" />
				</div>

				<div>
					<label htmlFor="address" className="formLabel">
						Address
					</label>
					<Field type="text" id="address" name="address" />
					<ErrorMessage name="address" component="div" className="error" />
				</div>

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};

export default RegistrationForm;
