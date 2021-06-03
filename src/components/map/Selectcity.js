import React from 'react';
import Villes from '../../Villes';
import { useGlobalContext } from './../../context';

const Selectcity = () => {
	const { setQuery } = useGlobalContext();
	return (
		<div>
			<label htmlFor="select-city">Ville:</label>
			<select
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
