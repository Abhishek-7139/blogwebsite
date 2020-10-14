import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css';

const Account = ({ _id, name, company, year, branch, avatar }) => {
	return (
		<Link className='account' to={'/blogwebsite/accounts?id=' + _id}>
			<article className='account-card'>
				<img src={avatar} alt='avatar' className='account-card-avatar' />
				<span className='details'>
					<h1 className='account-card-name'>{name}</h1>
					<h3 className='account-card-company'>{company}</h3>
					<h4 className='account-card-branch'>
						{branch}, {year}
					</h4>
				</span>
			</article>
		</Link>
	);
};

export default Account;
