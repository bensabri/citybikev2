import React, { useState } from 'react';
import CreateProfil from './CreateProfil';
import GetProfil from './GetProfil';
import UpdateProfil from './UpdateProfil';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useGlobalContext } from '../../context';
import './Profile.css';

const Profile = () => {
	const { user } = useAuth0();
	const { sub } = user;

	const [postUserData, setPostUserData] = useState([
		{
			firstname: '',
			lastname: '',
			email: '',
			age: '',
			address: '',
			gender: '',
			authid: sub,
			count: 0,
			date: new Date(),
		},
	]);
	const { userData, loading, isEditing } = useGlobalContext();

	let userCreated = userData.find((user) => user.authid === sub);

	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{!userCreated && (
						<CreateProfil
							postUserData={postUserData}
							setPostUserData={setPostUserData}
						/>
					)}
					{isEditing ? (
						<UpdateProfil
							postUserData={postUserData}
							setPostUserData={setPostUserData}
						/>
					) : (
						<GetProfil />
					)}
				</div>
			)}
		</>
	);
};

export default withAuthenticationRequired(Profile, {
	onRedirecting: () => <h1>Loading ...</h1>,
});
