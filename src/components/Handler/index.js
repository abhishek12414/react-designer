import React from 'react';
import PropTypes from 'prop-types';

import ScaleAnchor from './ScaleAnchor';
import RotateAnchor from './RotateAnchor';

import './index.css';

const Handler = ({
	boundingBox,
	canRotate,
	canResize,
	onMouseLeave,
	onDoubleClick,
	onResize,
	onRotate,
	onDrag,
}) => {
	const onMouseDown = (event) => {
		// event.preventDefault();
		if (event.target.classList.contains('handler')) {
			onDrag(event);
		}
	};

	let handlerStyle = {
		...boundingBox,
		top: boundingBox.top - 5,
		left: boundingBox.left - 5,
		width: boundingBox.width + 10,
		height: boundingBox.height + 10,
		transform: `rotate(${boundingBox.rotate}deg)`,
	};

	return (
		<div
			className="handler"
			style={handlerStyle}
			onMouseDown={onMouseDown}
			onMouseLeave={onMouseLeave}
			onDoubleClick={onDoubleClick}
		>
			{canRotate && (
				<RotateAnchor boundingBox={boundingBox} onMouseDown={onRotate} />
			)}
			{canResize && (
				<ScaleAnchor boundingBox={boundingBox} onMouseDown={onResize} />
			)}
		</div>
	);
};

Handler.propTypes = {
	canRotate: PropTypes.bool,
	canResize: PropTypes.bool,
	boundingBox: PropTypes.object.isRequired,
	onDrag: PropTypes.func.isRequired,
	onResize: PropTypes.func.isRequired,
	onRotate: PropTypes.func,
	onMouseLeave: PropTypes.func.isRequired,
	onDoubleClick: PropTypes.func.isRequired,
};

export default Handler;
