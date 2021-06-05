import React from 'react';
import Villes from '../../Villes';
import { useGlobalContext } from './../../context';
import './Maps.css';

const Selectcity = () => {
	const { setQuery } = useGlobalContext();
	return (
		<div className="select-container ">
			<h1 className="title">
				<strong>Cliquez sur la carte</strong>
			</h1>
			<label htmlFor="select-city">Selectionner une Ville:</label>
			<select
				className="text-black"
				name="city"
				id="select-city"
				onChange={(e) => setQuery(e.target.value)}
			>
				{Villes.sort().map((ville, index) => (
					<option key={index} value={ville}>
						{ville}
					</option>
				))}
			</select>
		</div>
	);
};

export default Selectcity;
