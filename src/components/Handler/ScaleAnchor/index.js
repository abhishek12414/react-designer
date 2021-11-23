import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const ScaleAnchor = ({ boundingBox, onMouseDown }) => {
	return (
		<div
			className="scaleAnchor"
			style={{
				marginTop: boundingBox.height + 5,
				marginLeft: boundingBox.width + 5,
			}}
			onMouseDown={onMouseDown}
		/>
	);
};

ScaleAnchor.propTypes = {
	boundingBox: PropTypes.object.isRequired,
	onMouseDown: PropTypes.func.isRequired,
};

export default ScaleAnchor;
