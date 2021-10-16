import React from 'react';
import PropTypes from 'prop-types';
import PropertyGroup from '../PropertyGroup';
import Columns from '../Columns';
import Column from '../Column';
import Button from '../../widgets/Button';
import styles from './index.module.css';
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
		<PropertyGroup>
			<Columns label="Label">
				<Column name>
					<p style={{ margin: 0, textTransform: 'capitalize' }}>
						{name || elementType}
					</p>
				</Column>
			</Columns>
			<Columns label="Type">
				{type ? (
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Column>{type}</Column>
						<Column>
							<Icon icon={type} size={24} />
						</Column>
					</div>
				) : null}
			</Columns>
			<Columns label="Shape">
				<Column name>
					<p style={{ margin: 0, textTransform: 'capitalize' }}>
						{elementType}
					</p>
				</Column>
			</Columns>
			<Columns label="Cluster">
				<Column>
					<div style={{ display: 'flex' }}>
						<Button style={styles.fabButton} onClick={onAddClusterClick}>
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
			<Columns label="Edit">
				<Button onClick={onClick}>Edit</Button>
			</Columns>
		</PropertyGroup>
	);
};

ObjectItem.propTypes = {
	name: PropTypes.string,
	elementType: PropTypes.string,
	type: PropTypes.string,
	clusterList: PropTypes.array,
	clusterId: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onAddClusterClick: PropTypes.func.isRequired,
};

export default ObjectItem;
