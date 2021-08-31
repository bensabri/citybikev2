import React from 'react';
import axios from 'axios';
import { useGlobalContext } from '../../context';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';

const UpdateProfil = ({ postUserData, setPostUserData }) => {
	const { counter, setCounter, userData, isEditing, setIsEditing } =
		useGlobalContext();
	const { user } = useAuth0();
	const { sub } = user;

	const userId = userData.find((user) => user.authid === sub);
	const { _id } = userId;

	const submitForm = (e) => {
		e.preventDefault();
		try {
			axios.put(
				`http://localhost:5000/profil/api/user/${_id}`,
				postUserData
			);
			setCounter(counter + 1);
			setIsEditing(!isEditing);
			alert('Vos informations ont été mise à jour!');
		} catch (error) {
			alert(`Vos informations n'ont pas pu être mise à jour`);
		}
	};

	return (
		<>
			<form onSubmit={submitForm}>
				<div className="form-container dark:text-black">
					<div className="flex-personel-info dark:bg-gray-800 dark:text-white">
						<h2 className="text-center text-xl font-bold">
							Modifier vos information Personnel
						</h2>
						<input
							className="dark:text-black"
							type="text"
							name="firstname"
							id="firstname"
							placeholder="Nom"
							required
							value={postUserData.firstname}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									firstname: e.target.value,
								})
							}
						/>
						<input
							className="dark:text-black"
							type="text"
							name="lastname"
							id="lastname"
							placeholder="Prénon"
							required
							value={postUserData.lastname}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									lastname: e.target.value,
								})
							}
						/>
						<input
							className="dark:text-black"
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							required
							value={postUserData.email}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									email: e.target.value,
								})
							}
						/>
						<input
							className="dark:text-black"
							type="number"
							name="age"
							id="age"
							placeholder="Age"
							required
							min="1"
							value={postUserData.age}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									age: e.target.value,
								})
							}
						/>

						<input
							className="dark:text-black"
							type="text"
							name="address"
							id="address"
							placeholder="Address"
							required
							value={postUserData.address}
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									address: e.target.value,
								})
							}
						/>
						<select
							className="dark:text-black"
							name="gender"
							id="gender"
							value={postUserData.gender}
							required
							onChange={(e) =>
								setPostUserData({
									...postUserData,
									gender: e.target.value,
								})
							}
						>
							<option value="">Gender</option>
							<option value="male">Homme</option>
							<option value="female">Femme</option>
						</select>
						<div className="btn-container-updateform">
							<button
								className="bg-red-400 text-white py-1.5 px-2.5 my-5 rounded-md"
								onClick={() => setIsEditing(!isEditing)}
							>
								Annuler
							</button>
							<button
								type="submit"
								className="bg-green-400 text-white py-1.5 px-2.5 my-5 rounded-md"
							>
								Modifier
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default UpdateProfil;
