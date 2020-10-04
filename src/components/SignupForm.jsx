import React, { useState } from 'react';
import ButtonElement from './common/ButtonElement';
import FormElement from './common/FormElement';
import './SignupForm.css';

const SignupForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const formData = {
		Username: setUsername,
		Email: setEmail,
		Password: setPassword,
		ConfirmPassword: setConfirmPassword,
	};

	const handleChange = (e) => {
		formData[e.currentTarget.name](e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(username);
		console.log(email);
		console.log(password);
		console.log(confirmPassword);
	};

	const elements = [
		{
			name: 'Username',
			label: 'Username',
			type: 'text',
			_id: 'username',
			placeholder: 'Username',
			value: username,
		},
		{
			name: 'Email',
			label: 'Email',
			type: 'email',
			_id: 'email',
			placeholder: 'abc@example.com',
			value: email,
		},
		{
			name: 'Password',
			label: 'Password',
			type: 'password',
			_id: 'password',
			placeholder: 'Password',
			value: password,
		},
		{
			name: 'ConfirmPassword',
			label: 'Confirm Password',
			type: 'password',
			_id: 'confirmPassword',
			placeholder: 'Re-enter Password',
			value: confirmPassword,
		},
	];

	return (
		<form>
			<h3 id='form-title'>Sign Up to our Newsletter</h3>
			{elements.map((element, index) => {
				return (
					<FormElement
						key={index}
						element={{ ...element, onChange: handleChange }}
					/>
				);
			})}
			<ButtonElement
				details={{
					_id: 'signupButton',
					onClick: handleSubmit,
					label: 'Sign Up',
				}}
			/>
		</form>
	);
};

export default SignupForm;
