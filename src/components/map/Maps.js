import React, { useEffect } from 'react';
import './Maps.css';
import axios from 'axios';
import Selectcity from './Selectcity';
import { useGlobalContext } from './../../context';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import green from '../../icons/cycling_green.png';
import orange from '../../icons/cycling_orange.png';
import red from '../../icons/cycling_red.png';

const Maps = () => {
	const { data, setData, isFetch, setIsFetched, query, setQuery } =
		useGlobalContext();

	const URL = `https://api.jcdecaux.com/vls/v1/stations?contract=${query}&apiKey=55d7b7d4946a320c591ffa19aee2bbab6049dca3`;

	useEffect(() => {
		axios.get(URL).then((res) => {
			setData(res.data);
			setIsFetched(true);
		});
	}, [query]);

	const [first] = data;

	const greenBike = new Icon({
		iconUrl: green,
		iconSize: [25, 25],
	});
	const orangeBike = new Icon({
		iconUrl: orange,
		iconSize: [25, 25],
	});
	const redBike = new Icon({
		iconUrl: red,
		iconSize: [25, 25],
	});

	console.log(data);

	return (
		<>
			<Selectcity />
			{isFetch && (
				<div className="leaflet-container">
					<Map
						center={[first.position.lat, first.position.lng]}
						zoom={12}
						scrollWheelZoom={true}
					>
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
						/>
						{data.map((bike, index) => (
							<Marker
								key={index}
								position={bike.position}
								icon={
									bike.available_bikes === 0
										? redBike
										: bike.available_bikes <= 5
										? orangeBike
										: greenBike
								}
								onClick={() =>
									console.log(
										`Vélo disponible dans cette station ${bike.available_bikes}`
									)
								}
							/>
						))}
					</Map>
				</div>
			)}
		</>
	);
};

export default Maps;
