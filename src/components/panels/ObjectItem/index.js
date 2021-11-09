import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import PropertyGroup from '../PropertyGroup';
import Columns from '../Columns';
import Column from '../Column';
import Button from '../../widgets/Button';
import Icon from '../../shared/Icon';

const ObjectItem = ({
	name,
	elementType,
	type,
	clusterList,
	clusterId,
	onClick,
	onChange,
	onAddClusterClick,
}) => {
	// const { name, elementType, type, clusterList, clusterId } = props;

	const clusterOptions = (
		<React.Fragment>
			<option value="">Select Cluster</option>,
			{clusterList.map((i) => (
				<option key={i.value} value={i.value}>
					{i.label}
				</option>
			))}
			,
		</React.Fragment>
	);

	return (
		<PropertyGroup className="propertyGroup">
			<Columns label="Label" rowInline>
				<Column name>
					<p style={{ margin: 0, textTransform: 'capitalize' }}>{name ?? ''}</p>
				</Column>
			</Columns>
			<Columns label="Type" rowInline>
				{type ? (
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Column>{type}</Column>
						<Column>
							<Icon icon={type} size={24} />
						</Column>
					</div>
				) : null}
			</Columns>
			<Columns label="Shape" rowInline>
				<Column name>
					<p style={{ margin: 0, textTransform: 'capitalize' }}>
						{elementType}
					</p>
				</Column>
			</Columns>
			<Columns label="Cluster" rowInline>
				<Column>
					<div style={{ display: 'flex' }}>
						<Button style={'fabButton'} onClick={onAddClusterClick}>
							+
						</Button>
						<select
							value={clusterId}
							onChange={(e) => onChange({ clusterId: e.target.value })}
						>
							{clusterOptions}
						</select>
					</div>
				</Column>
			</Columns>
			<Columns label="Edit" rowInline>
				<Column>
					<Button onClick={onClick}>Edit</Button>
				</Column>
			</Columns>
		</PropertyGroup>
	);
};

ObjectItem.propTypes = {
	name: PropTypes.string,
	elementType: PropTypes.string.isRequired,
	type: PropTypes.string,
	clusterList: PropTypes.array.isRequired,
	clusterId: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onAddClusterClick: PropTypes.func.isRequired,
};

export default ObjectItem;
