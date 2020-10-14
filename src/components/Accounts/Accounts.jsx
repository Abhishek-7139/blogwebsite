import React from 'react';
import Account from '../Account/Account';
import avatar from '../../resources/pics/iosd-person.png';
import './Accounts.css';

const Accounts = () => {
	return (
		<section id='accounts'>
			<Account
				_id='001'
				name='Rohan Kumar'
				company='Microsoft'
				year='2020'
				branch='COE'
				avatar={avatar}
			/>
			<Account
				_id='002'
				name='Mukesh Shah'
				company='Nvidia'
				year='2019'
				branch='ECE'
				avatar={avatar}
			/>
			<Account
				_id='003'
				name='Vatsal Dhar'
				company='Google'
				year='2020'
				branch='COE'
				avatar={avatar}
			/>
			<Account
				_id='004'
				name='Mayank Sharma'
				company='Microsoft'
				year='2020'
				branch='COE'
				avatar={avatar}
			/>
		</section>
	);
};

export default Accounts;
