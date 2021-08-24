import React, { useRef, useEffect, useState } from 'react';
import Timer from '../timer/Timer';
import { useGlobalContext } from './../../context';
import './Canvas.css';

const Canvas = () => {
	const { setSigned, hideBtnMap } = useGlobalContext();

	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = 200;
		canvas.height = 120;
		const context = canvas.getContext('2d');
		context.lineCap = 'round';
		context.strokeStyle = 'black';
		context.lineWidth = 4;
		contextRef.current = context;
	}, []);

	const startDrawing = ({ nativeEvent }) => {
		const { offsetX, offsetY } = nativeEvent;
		contextRef.current.beginPath();
		contextRef.current.moveTo(offsetX, offsetY);
		setIsDrawing(true);
		setSigned(true);
	};

	const finishDrawing = () => {
		contextRef.current.closePath();
		setIsDrawing(false);
	};

	const mouseOut = () => {
		setIsDrawing(false);
	};

	const draw = ({ nativeEvent }) => {
		if (!isDrawing) {
			return;
		}
		const { offsetX, offsetY } = nativeEvent;
		contextRef.current.lineTo(offsetX, offsetY);
		contextRef.current.stroke();
	};

	const eraseDraw = () => {
		contextRef.current.setTransform(1, 0, 0, 1, 0, 0);
		contextRef.current.clearRect(
			0,
			0,
			window.innerWidth,
			window.innerHeight
		);
		setSigned(false);
	};

	return (
		<div className="canvas-container">
			<h1 className={`dark:text-black ${hideBtnMap ? 'hide' : ''}`}>
				<strong>Signature ici</strong>
			</h1>
			<canvas
				className={`${hideBtnMap ? 'hide' : ''}`}
				onMouseDown={startDrawing}
				onMouseUp={finishDrawing}
				onMouseOut={mouseOut}
				onMouseMove={draw}
				ref={canvasRef}
			/>
			<div className="dark:text-black btn-container-detail">
				{!hideBtnMap && <button onClick={eraseDraw}>Effacer</button>}
				<Timer />
			</div>
		</div>
	);
};

export default Canvas;
