import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useGlobalContext } from '../../context';
import './Profile.css';

const GetProfil = () => {
	const { userData } = useGlobalContext();

	const { user } = useAuth0();
	const { sub } = user;

	return (
		<>
			<div>
				{userData
					.filter((user) => user.authid === sub)
					.map(
						(
							{
								firstname,
								lastname,
								email,
								age,
								address,
								gender,
							},
							index
						) => (
							<div
								className="personel-info-container text-black"
								key={index}
							>
								<h2 className="text-center text-xl font-bold">
									Vos infomation Personnel
								</h2>
								<p>
									<strong>Nom:</strong> {firstname}
								</p>
								<p>
									<strong>Prénon:</strong> {lastname}
								</p>
								<p>
									<strong>Email:</strong> {email}
								</p>
								<p>
									<strong>Age: </strong>
									{age}
									{` ${age > 1 ? 'ans' : 'an'} `}
								</p>
								<p>
									<strong>Address:</strong> {address}
								</p>
								<p>
									<strong>Gender:</strong> {gender}
								</p>
								{/* <button className="bg-red-400 text-white py-1.5 px-2.5 my-5 rounded-md">
									Update
								</button> */}
							</div>
						)
					)}
			</div>
		</>
	);
};

export default GetProfil;
