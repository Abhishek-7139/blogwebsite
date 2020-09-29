import React from 'react';
import Account from './Account';
import avatar from '../resources/pics/iosd-person.png';
import './Accounts.css';

const Accounts = () => {
	return (
		<section id='accounts'>
			<Account
				name='Mukesh Ambani'
				company='Microsoft'
				year='2020'
				branch='COE'
				avatar={avatar}
			/>
			<Account
				name='Mukesh Ambani'
				company='Microsoft'
				year='2020'
				branch='COE'
				avatar={avatar}
			/>
			<Account
				name='Mukesh Ambani'
				company='Microsoft'
				year='2020'
				branch='COE'
				avatar={avatar}
			/>
			<Account
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
