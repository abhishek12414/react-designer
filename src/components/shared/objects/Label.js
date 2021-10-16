import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ x, y, label }) => {
	if (!label) {
		return null;
	}

	return (
		<text x={x} y={y} style={{ fontSize: 12 }}>
			{label}
		</text>
	);
};

Label.propTypes = {
	x: PropTypes.number,
	y: PropTypes.number,
	label: PropTypes.string,
};

export default Label;
