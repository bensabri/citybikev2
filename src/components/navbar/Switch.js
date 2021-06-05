import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useGlobalContext } from './../../context';

export default function SwitchesGroup() {
	const { night, setNight } = useGlobalContext();

	const handleChange = () => {
		setNight(!night);
	};

	return (
		<FormControl component="fieldset">
			<FormGroup>
				<FormControlLabel
					control={<Switch onChange={handleChange} name="gilad" />}
					label={`${night ? 'Night' : 'Light'} Mode`}
				/>
			</FormGroup>
		</FormControl>
	);
}
