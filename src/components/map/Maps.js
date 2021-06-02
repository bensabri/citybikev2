import React from 'react';
import '../../App.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

const Maps = () => {
	return (
		<div className="leaflet-container">
			<Map center={[45.4, -75.7]} zoom={12}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
			</Map>
		</div>
	);
};

export default Maps;
