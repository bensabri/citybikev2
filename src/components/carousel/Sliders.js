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
				'City Bike vous accompagne dans 24 villes dans le monde ',
		},
		{
			name: 'City Bike',
			img: 'https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/03/laptop-working-home.jpeg',
			description: 'Trouvé la station la plus proche de chez vous',
		},
	];

	return (
		<>
			<Carousel autoPlay={play} interval={5000}>
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
					<Button>Check it out!</Button>
				</div>

				<img src={props.item.img} alt="" className="sliders" />
			</div>
		</Paper>
	);
}
export default Sliders;
