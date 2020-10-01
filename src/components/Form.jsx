import React, { useState } from 'react';
import './Form.css';

const Form = () => {
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

	return (
		<form>
			<h3 id='form-title'>Sign Up to our Newsletter</h3>
			<div className='formElement'>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					id='username'
					name='Username'
					placeholder='Username'
					onChange={handleChange}
					value={username}
				/>
			</div>
			<div className='formElement'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='Email'
					placeholder='abc@example.com'
					onChange={handleChange}
					value={email}
				/>
			</div>
			<div className='formElement'>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='passowrd'
					name='Password'
					placeholder='Password'
					onChange={handleChange}
					value={password}
				/>
			</div>
			<div className='formElement'>
				<label htmlFor='confirmPassword'>Re-enter Password</label>
				<input
					type='password'
					id='confirmPassowrd'
					name='ConfirmPassword'
					placeholder='Re-enter Password'
					onChange={handleChange}
					value={confirmPassword}
				/>
			</div>
			<div className='buttonElement'>
				<button id='signupButton' onClick={handleSubmit}>
					Sign Up
				</button>
			</div>
		</form>
	);
};

export default Form;
