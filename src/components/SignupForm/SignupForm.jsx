import React, { useState } from 'react';
import ButtonElement from '../common/ButtonElement';
import FormElement from '../common/FormElement';
import './SignupForm.css';

const SignupForm = () => {
	const [rollno, setRollno] = useState('');
	const [email, setEmail] = useState('');

	const formData = {
		Rollno: setRollno,
		Email: setEmail,
	};

	const handleChange = (e) => {
		formData[e.currentTarget.name](e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		/*console.log(username);
		console.log(email);
		console.log(password);
		console.log(confirmPassword);*/
	};

	const elements = [
		{
			name: 'Rollno',
			label: 'NSUT Roll-number',
			type: 'text',
			_id: 'rollno',
			placeholder: 'NSUT Roll-number',
			value: rollno,
		},
		{
			name: 'Email',
			label: 'Email',
			type: 'email',
			_id: 'email',
			placeholder: 'abc@example.com',
			value: email,
		},
	];

	return (
		<form>
			<h3 id='form-title'>Sign Up for Subscription</h3>
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
