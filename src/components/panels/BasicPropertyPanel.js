import React from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';

import Column from './Column';
import Columns from './Columns';
import PropertyGroup from './PropertyGroup';
import Button from '../widgets/Button';
import Select from '../widgets/Select';

const BasicPropertyPanel = ({
	clusterList,
	object,
	resetCurrentSelection,
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

	return (
		<PropertyGroup object={object}>
			<Columns label="Editor" rowInline spaceBetween>
				<Button onClick={() => resetCurrentSelection()}>Back</Button>
			</Columns>
			{object.elementType === 'image' ? (
				<>
					{/* {has(object, 'width', 'height') && (
						<Columns label="Size" inline>
							<Column
								disabled
								label="W"
								type="number"
								showIf={has(object, 'width')}
								value={object.width}
								onChange={(value) => onChange('width', +value)}
							/>
							<Column
								disabled
								label="H"
								type="number"
								showIf={has(object, 'height')}
								value={object.height}
								onChange={(value) => onChange('height', +value)}
							/>
						</Columns>
					)} */}
				</>
			) : (
				<>
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

					{/* {has(object, 'width', 'height') && (
						<Columns label="Size" inline>
							<Column
								label="W"
								type="number"
								showIf={has(object, 'width')}
								value={object.width}
								onChange={(value) => onChange('width', +value)}
							/>
							<Column
								label="H"
								type="number"
								showIf={has(object, 'height')}
								value={object.height}
								onChange={(value) => onChange('height', +value)}
							/>
						</Columns>
					)} */}
					{/* <Columns label="Position" inline>
						<Column
							label="X"
							type="number"
							showIf={has(object, 'x')}
							value={object.x}
							readOnly={true}
							onChange={(value) => onChange('x', +value)}
						/>
						<Column
							label="Y"
							type="number"
							showIf={has(object, 'y')}
							value={object.y}
							readOnly={true}
							onChange={(value) => onChange('y', +value)}
						/>
					</Columns> */}
					{/* {has(object, 'rotate') && (
							<Columns label="Rotation">
								<Column
									label="angle"
									value={object.rotate}
									readOnly={true}
									onChange={(value) => onChange('rotate', +value)}
								/>
							</Columns>
						)} */}
					<Columns label="Shape" rowInline>
						<p style={{ margin: 0, textTransform: 'capitalize' }}>
							{object.elementType}
						</p>
					</Columns>
					<Columns label="Type" rowInline>
						<p style={{ margin: 0, textTransform: 'capitalize' }}>
							{object.type}
						</p>
					</Columns>
					<Columns label="Delete" rowInline>
						<Button onClick={onDelete}>Delete Shape</Button>
					</Columns>
					<Columns label="Cluster" rowInline>
						<Column>
							<div style={{ display: 'flex' }}>
								<Button style={'fabButton'} onClick={onAddClusterClick}>
									+
								</Button>
								<Select
									options={clusterList}
									value={object?.clusterId || ''}
									onChange={(e) => onChange('clusterId', e.target.value)}
								/>
							</div>
						</Column>
					</Columns>
				</>
			)}
		</PropertyGroup>
	);
};

BasicPropertyPanel.propTypes = {
	object: PropTypes.object,
	onDelete: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	clusterList: PropTypes.array,
	onAddClusterClick: PropTypes.func.isRequired,
	resetCurrentSelection: PropTypes.func.isRequired,
};

BasicPropertyPanel.defaultProps = {
	clusterList: [],
};

export default BasicPropertyPanel;
