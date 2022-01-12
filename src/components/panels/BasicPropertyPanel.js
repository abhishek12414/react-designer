import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';

import Column from './Column';
import Columns from './Columns';
import PropertyGroup from './PropertyGroup';
import Button from '../widgets/Button';
import Select from '../widgets/Select';
import Icon from '../shared/Icon';

const BasicPropertyPanel = ({
	clusterList,
	object,
	onChange,
	onDelete,
	onAddClusterClick,
	layoutDimension,
	transformedLayout,
}) => {
	const transformedDimension = {
		transformWidth: transformedLayout.layoutWidth / layoutDimension.width,
		transformHeight: transformedLayout.layoutHeight / layoutDimension.height,
	};

	// const onLabelPosChange = (key, value) => {
	// 	onChange({
	// 		labelCoordinates: {
	// 			...object.labelCoordinates,
	// 			[key]: value,
	// 		},
	// 	});
	// };

	const onLabelPosChange = (key, value) => {
		let tValue;
		switch (key) {
			case '_x':
				tValue = value * transformedDimension.transformWidth;
				onChange({
					labelCoordinates: {
						...object.labelCoordinates,
						[key]: value,
						x: tValue,
					},
				});
				break;

			case '_y':
				tValue =
					transformedLayout.layoutHeight -
					value * transformedDimension.transformHeight;
				onChange({
					labelCoordinates: {
						...object.labelCoordinates,
						[key]: value,
						y: tValue,
					},
				});
				break;
			default:
				break;
		}
	};

	if (object.elementType === 'image') {
		return null;
	}

	return (
		<PropertyGroup object={object}>
			<Columns label="Label Property">
				<Column
					label="Name"
					value={object.name || ''}
					onChange={(value) => onChange({ name: value })}
				/>
				{has(object.labelCoordinates, 'x', 'y') && (
					<div style={{ display: 'flex' }}>
						<Column
							label="X"
							type="number"
							showIf={has(object.labelCoordinates, 'x')}
							value={object.labelCoordinates._x || ''}
							onChange={(value) => onLabelPosChange('_x', value)}
						/>
						<Column
							label="Y"
							type="number"
							showIf={has(object.labelCoordinates, 'y')}
							value={object.labelCoordinates._y || ''}
							onChange={(value) => onLabelPosChange('_y', value)}
						/>
					</div>
				)}
				{/* {has(object.labelCoordinates, 'x', 'y') && (
					<div style={{ display: 'flex' }}>
						<Column
							disabled
							label="X"
							type="number"
							showIf={has(object.labelCoordinates, 'x')}
							value={object.labelCoordinates.x}
							onChange={(value) => onLabelPosChange('x', value)}
						/>
						<Column
							disabled
							label="Y"
							type="number"
							showIf={has(object.labelCoordinates, 'y')}
							value={object.labelCoordinates.y}
							onChange={(value) => onLabelPosChange('y', value)}
						/>
					</div>
				)} */}
			</Columns>
			<Columns label="Shape" rowInline>
				<p style={{ margin: 0, textTransform: 'capitalize' }}>
					{object.elementType}
				</p>
			</Columns>
			<Columns label="Type" rowInline>
				<p style={{ margin: 0, textTransform: 'capitalize' }}>{object.type}</p>
			</Columns>
			<Columns label="Action" rowInline>
				<Button title="Delete" onClick={onDelete}>
					<Icon
						icon="delete"
						size={24}
						style={{ width: 16, height: 16, fill: 'black' }}
					/>
				</Button>
			</Columns>
			<Columns label="Cluster" rowInline>
				<Column>
					<div style={{ display: 'flex' }}>
						<Button onClick={onAddClusterClick}>+</Button>
						<Select
							options={clusterList}
							value={object?.clusterId || ''}
							error={object?.errors?.clusterId}
							onChange={(e) => onChange({ clusterId: e.target.value })}
						/>
					</div>
				</Column>
			</Columns>
		</PropertyGroup>
	);
};

BasicPropertyPanel.propTypes = {
	object: PropTypes.object,
	onDelete: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	clusterList: PropTypes.array,
	layoutDimension: PropTypes.object,
	transformedLayout: PropTypes.object,
	onAddClusterClick: PropTypes.func.isRequired,
};

BasicPropertyPanel.defaultProps = {
	clusterList: [],
};

export default BasicPropertyPanel;
