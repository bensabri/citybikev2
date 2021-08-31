import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { Link } from 'react-router-dom';
import './Sliders.css';

function Sliders() {
	const [play, setPlay] = useState(true);
	let items = [
		{
			name: 'City Bike',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Melbourne_City_Bikes.JPG/1200px-Melbourne_City_Bikes.JPG',
			description:
				'City Bike vous accompagne dans plusieurs villes dans le monde, sélectionner votre ville',
		},
		{
			name: 'City Bike',
			img: 'https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/03/laptop-working-home.jpeg',
			description: 'Trouvé la station la plus proche de chez vous',
		},
		{
			name: 'City Bike',
			img: 'https://le-velo-urbain.com/wp-content/uploads/2020/11/velo-singlespeed-speed-500-elops-2.jpg',
			description: 'Récupère votre vélo',
		},
	];

	return (
		<>
			<Carousel indicators={false} autoPlay={play} interval={5000}>
				{items.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</Carousel>
			<div className="slider-play-btn">
				{play ? (
					<PauseCircleOutlineIcon
						onClick={() => setPlay(!play)}
						fontSize="large"
					/>
				) : (
					<PlayCircleOutlineIcon
						onClick={() => setPlay(!play)}
						fontSize="large"
					/>
				)}
			</div>
		</>
	);
}

function Item(props) {
	return (
		<Paper>
			<div className="slider-container">
				<div className="slider-detail">
					<h2>{props.item.name}</h2>
					<p>{props.item.description}</p>
				</div>

				<img src={props.item.img} alt="" className="sliders" />
			</div>
		</Paper>
	);
}
export default Sliders;
