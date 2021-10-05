import React from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useGlobalContext } from '../../context';
import './SwitchNight.css';

export default function SwitchesGroup() {
	const { night, setNight } = useGlobalContext();

	const handleChange = () => {
		setNight(!night);
	};

	return (
		<div onClick={handleChange} className="dark-container">
			{night ? <Brightness7Icon /> : <Brightness2Icon />}
		</div>
	);
}
