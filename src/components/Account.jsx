import React from 'react';
import './Account.css';

const Account = ({ name, company, year, branch, avatar }) => {
	return (
		<card className='account-card'>
			<img src={avatar} alt='avatar' className='account-card-avatar' />
			<p className='details'>
				<h1 className='account-card-name'>{name}</h1>
				<h3 className='account-card-company'>{company}</h3>
				<h4 className='account-card-branch'>
					{branch}, {year}
				</h4>
			</p>
		</card>
	);
};

export default Account;
