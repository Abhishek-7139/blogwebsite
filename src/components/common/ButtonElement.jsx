import React from 'react';
import './ButtonElement.css';

const ButtonElement = ({ details }) => {
	return (
		<div className='buttonElement'>
			<button className='button' id={details._id} onClick={details.onClick}>
				{details.label}
			</button>
		</div>
	);
};

export default ButtonElement;
