import React from 'react';
import '../navbar/Nav.css';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<button className="btn-container" onClick={() => loginWithRedirect()}>
			Connecte
		</button>
	);
};

export default LoginButton;
