import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute = ({ component, ...args }) => {
	return (
		<Route
			component={withAuthenticationRequired(component, {
				onRedirecting: () => <h1>Loading ...</h1>,
			})}
			{...args}
		/>
	);
};
export default ProtectedRoute;
