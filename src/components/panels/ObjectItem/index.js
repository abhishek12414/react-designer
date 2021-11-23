import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import PropertyGroup from '../PropertyGroup';
import Columns from '../Columns';
import Column from '../Column';
import Icon from '../../shared/Icon';
import Button from '../../widgets/Button';
import Checkbox from '../../widgets/Checkbox';

const ObjectItem = ({
	name,
	elementType,
	type,
	clusterList,
	clusterId,
	onClick,
	onChange,
	onAddClusterClick,
	isHidden,
}) => {
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
			{elementType !== 'image' && (
				<Columns label="Label" rowInline>
					<Column name>
						<p style={{ margin: 0 }}>{name ?? ''}</p>
					</Column>
				</Columns>
			)}
			{type ? (
				<Columns label="Type" rowInline>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							textTransform: 'capitalize',
						}}
					>
						<Column>{type}</Column>
						<Column>
							<Icon icon={type} size={24} style={{ width: 18, height: 18 }} />
						</Column>
					</div>
				</Columns>
			) : null}
			<Columns label="Shape" rowInline>
				<Column name>
					<p style={{ margin: 0, textTransform: 'capitalize' }}>
						{elementType}
					</p>
				</Column>
			</Columns>
			{elementType !== 'image' && (
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
			)}
			<Columns label="Hide in map" rowInline>
				<Checkbox
					hasIconSwitch
					name="isHidden"
					value={isHidden}
					onChange={onChange}
				/>
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
	isHidden: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onAddClusterClick: PropTypes.func.isRequired,
};

export default ObjectItem;
