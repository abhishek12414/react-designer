import React from 'react';
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
}) => {
	const onLabelPosChange = (key, value) => {
		onChange('labelCoordinates', {
			...object.labelCoordinates,
			[key]: value,
		});
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
					onChange={(value) => onChange('name', value)}
				/>
				{has(object.labelCoordinates, 'x', 'y') && (
					<div style={{ display: 'flex' }}>
						<Column
							label="X"
							type="number"
							showIf={has(object.labelCoordinates, 'x')}
							value={object.labelCoordinates.x}
							onChange={(value) => onLabelPosChange('x', value)}
						/>
						<Column
							label="Y"
							type="number"
							showIf={has(object.labelCoordinates, 'y')}
							value={object.labelCoordinates.y}
							onChange={(value) => onLabelPosChange('y', value)}
						/>
					</div>
				)}
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
				</Button>{' '}
			</Columns>
			<Columns label="Cluster" rowInline>
				<Column>
					<div style={{ display: 'flex' }}>
						<Button onClick={onAddClusterClick}>+</Button>
						<Select
							options={clusterList}
							value={object?.clusterId || ''}
							onChange={(e) => onChange('clusterId', e.target.value)}
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
	onAddClusterClick: PropTypes.func.isRequired,
};

BasicPropertyPanel.defaultProps = {
	clusterList: [],
};

export default BasicPropertyPanel;
