import React from 'react';
import { useGlobalContext } from './../../context';
import Canvas from './Canvas';

const DetailStation = () => {
	const { status, hideBtnMap } = useGlobalContext();

	return (
		<div>
			<div className="detail dark:bg-gray-7-00">
				<h2 className="dark:text-black detail-station">
					Detail de la {`${hideBtnMap ? 'reservation' : 'station'}`}
				</h2>
				<p
					title={status}
					className={`dark:text-black detailpara${
						hideBtnMap ? 'long' : ''
					}`}
				>
					{hideBtnMap
						? `Votre réservation est prise en compte ${status.slice(
								18,
								100
						  )}`
						: status}
				</p>
				{status.slice(0, 2) > 0 && <Canvas />}
			</div>
		</div>
	);
};

export default DetailStation;
