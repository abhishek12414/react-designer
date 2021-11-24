import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import ObjectItem from '../ObjectItem';
import { TYPES } from '../../../constants';
import Tab from '../../widgets/Tab';

const OPTIONS = ['all', ...Object.values(TYPES)];

const ObjectList = ({
	objects,
	onChange,
	onObjectSelect,
	objectFilter,
	onObjectFilterChange,
	...rest
}) => {
	const getObjects = () => {
		return objectFilter === 'all'
			? objects
			: objects?.filter((obj) => obj.type === objectFilter);
	};

	const getObjectIndex = (selectedObj, index) => {
		let objIndex = index;
		if (selectedObj?._id) {
			objIndex = objects?.findIndex((obj) => obj._id === selectedObj._id);
		} else if (selectedObj?.idx) {
			objIndex = objects.findIndex((obj) => obj.idx === selectedObj.idx);
		}
		return objIndex;
	};

	return (
		<div className="objectList">
			<Tab
				options={OPTIONS}
				activeValue={objectFilter}
				onSelect={onObjectFilterChange}
			/>
			{getObjects()?.map((obj, index) => (
				<ObjectItem
					key={obj?._id ?? obj?.idx ?? index}
					{...obj}
					{...rest}
					onEditObject={() => onObjectSelect(getObjectIndex(obj, index))}
					onChange={(data) => onChange(getObjectIndex(obj, index), data)}
				/>
			))}
		</div>
	);
};

ObjectList.propTypes = {
	objects: PropTypes.array.isRequired,
	objectFilter: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onObjectSelect: PropTypes.func.isRequired,
	onObjectFilterChange: PropTypes.func.isRequired,
};

export default ObjectList;
