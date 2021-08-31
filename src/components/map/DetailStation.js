import React from 'react';
import { useGlobalContext } from './../../context';
import Canvas from './Canvas';

const DetailStation = () => {
	const { status, hideBtnMap } = useGlobalContext();

	return (
		<div>
			<div className="detail dark:bg-gray-800">
				<h2 className="detail-station">
					Detail de la {`${hideBtnMap ? 'reservation' : 'station'}`}
				</h2>
				<p
					title={status}
					className={`detailpara${hideBtnMap ? 'long' : ''}`}
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
