import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { useGlobalContext } from './../../context';
import './Timer.css';

const Timer = ({ expiryTimestamp }) => {
	const { signed, hideBtnMap, setHideBtnMap } = useGlobalContext();
	const { seconds, minutes, isRunning, pause, restart } = useTimer({
		expiryTimestamp,
		onExpire: () => console.warn('onExpire called'),
	});

	const btnPause = () => {
		pause();
		setHideBtnMap(!hideBtnMap);
	};

	useEffect(() => {
		pause();
	}, []);

	return (
		<div>
			<div className={`timer-container ${signed ? 'open' : ''}`}>
				{isRunning ? (
					<button
						className="reservation-cancel-btn"
						onClick={btnPause}
					>
						Annuler
					</button>
				) : (
					<button
						className="reservation-btn"
						onClick={() => {
							const time = new Date();
							time.setSeconds(time.getSeconds() + 1200); // Restarts to 20 minutes timer
							restart(time);
							setHideBtnMap(!hideBtnMap);
						}}
					>
						Réserver
					</button>
				)}

				{isRunning && (
					<div className="btn-timer-container px-2">
						<h1 className="px-2">Il vous reste </h1>
						<span>{minutes}</span>:
						<span>
							{seconds < 10 ? `0${seconds} ` : `${seconds}`}
						</span>
						<p className="px-2"> pour récupère votre vélo</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Timer;
