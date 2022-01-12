export default ({ object, startPoint, mouse }) => {
	return {
		...object,
		x: +(mouse.x - (startPoint.clientX - startPoint.objectX)).toFixed(2),
		y: +(mouse.y - (startPoint.clientY - startPoint.objectY)).toFixed(2),
	};
};
