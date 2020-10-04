import React from 'react';
import './FormElement.css';

const FormElement = ({ element }) => {
	return (
		<div className='formElement'>
			<label htmlFor={element._id}>{element.label}</label>
			<input
				type={element.type}
				id={element._id}
				name={element.name}
				placeholder={element.placeholder}
				onChange={element.onChange}
				value={element.value}
			/>
		</div>
	);
};

export default FormElement;
