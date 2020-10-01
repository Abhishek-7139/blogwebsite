import React from 'react';
import Account from './Account';
import avatar from '../resources/pics/iosd-person.png';
import './Accounts.css';

const Accounts = () => {
	return (
		<section id='accounts'>
			<Account
				_id='001'
				name='Mukesh Ambani'
				company='Microsoft'
				year='2020'
				branch='COE'
				avatar={avatar}
			/>
			<Account
				_id='002'
				name='Mukesh Ambani'
				company='Microsoft'
				year='2020'
				branch='COE'
				avatar={avatar}
			/>
			<Account
				_id='003'
				name='Mukesh Ambani'
				company='Microsoft'
				year='2020'
				branch='COE'
				avatar={avatar}
			/>
			<Account
				_id='004'
				name='Mukesh Ambani'
				company='Microsoft'
				year='2020'
				branch='COE'
				avatar={avatar}
			/>
		</section>
	);
};

export default Accounts;
