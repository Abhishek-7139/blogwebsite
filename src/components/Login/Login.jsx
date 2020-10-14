import React, { useState } from 'react';
import FormElement from '../common/FormElement';
import ButtonElement from '../common/ButtonElement';

import './Login.css';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const formData = {
		Username: setUsername,
		Password: setPassword,
	};

	const handleChange = (e) => {
		formData[e.currentTarget.name](e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(username);
		console.log(password);
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
			name: 'Password',
			label: 'Password',
			type: 'password',
			_id: 'password',
			placeholder: 'Password',
			value: password,
		},
	];

	return (
		<div id='logInContainer'>
			<form>
				<h3 id='form-title'>Log In</h3>
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
						_id: 'loginButton',
						onClick: handleSubmit,
						label: 'Log In',
					}}
				/>
			</form>
		</div>
	);
};

export default Login;
