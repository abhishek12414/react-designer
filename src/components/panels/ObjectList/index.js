import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import ObjectItem from '../ObjectItem';

const ObjectList = ({ objects, onChange, onObjectSelect, ...rest }) => {
	return (
		<div className="objectList">
			{objects.map((obj, index) => (
				<ObjectItem
					key={index}
					{...obj}
					{...rest}
					onClick={() => onObjectSelect(index)}
					onChange={(data) => onChange(index, data)}
				/>
			))}
		</div>
	);
};

ObjectList.propTypes = {
	objects: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	onObjectSelect: PropTypes.func.isRequired,
};

export default ObjectList;
