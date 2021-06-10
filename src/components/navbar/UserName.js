import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserName = () => {
	const { user } = useAuth0();
	const { name } = user;
	return (
		<div>
			<h2 className="text-sm">Bonjour</h2>
			<p className="font-bold text-sm">{name}</p>
		</div>
	);
};

export default UserName;
