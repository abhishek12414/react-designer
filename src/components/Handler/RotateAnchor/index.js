import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const RotateAnchor = ({ boundingBox, onMouseDown }) => {
	return (
		<div
			className="rotateAnchor"
			style={{
				marginLeft: boundingBox.width + 5,
			}}
			onMouseDown={onMouseDown}
		/>
	);
};

RotateAnchor.propTypes = {
	boundingBox: PropTypes.object.isRequired,
	onMouseDown: PropTypes.func.isRequired,
};

export default RotateAnchor;
