import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
	const { logout } = useAuth0();

	return (
		<button
			style={{
				backgroundColor: 'hsl(0, 93%, 62%)',
				padding: '5px 15px',
				borderRadius: '3px',
			}}
			onClick={() => logout({ returnTo: window.location.origin })}
		>
			Log Out
		</button>
	);
};

export default LogoutButton;
