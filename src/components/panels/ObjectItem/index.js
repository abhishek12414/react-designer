import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import Column from '../Column';
import Columns from '../Columns';
import Icon from '../../shared/Icon';
import Select from '../../widgets/Select';
import Button from '../../widgets/Button';
import Checkbox from '../../widgets/Checkbox';
import PropertyGroup from '../PropertyGroup';

const ObjectItem = ({
	name,
	elementType,
	type,
	clusterList,
	clusterId,
	onEditObject,
	onChange,
	onAddClusterClick,
	isHidden,
}) => {
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
							<Button onClick={onAddClusterClick}>+</Button>
							<Select
								name="clusterId"
								value={clusterId}
								options={clusterList}
								onChange={(e) => onChange({ clusterId: e.target.value })}
							/>
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
					<Button title="Edit" onClick={onEditObject}>
						<Icon
							icon="pencil"
							size={24}
							style={{ width: 16, height: 16, fill: 'black' }}
						/>
					</Button>
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
	onEditObject: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onAddClusterClick: PropTypes.func.isRequired,
};

export default ObjectItem;
