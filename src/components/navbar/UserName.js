import React from 'react';
import { useGlobalContext } from '../../context';
import { useAuth0 } from '@auth0/auth0-react';

const UserName = () => {
	const { userData, isFetch } = useGlobalContext();
	const { user } = useAuth0();
	const { sub } = user;

	return (
		<div>
			{isFetch &&
				userData
					.filter((user) => user.authid === sub)
					.map((user, index) => (
						<p
							key={index}
							className="font-normal text-sm flex-wrap px-0.5"
						>
							Bonjour<strong> {user.lastname}</strong>
						</p>
					))}
		</div>
	);
};

export default UserName;
