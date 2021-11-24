import React from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';

import Column from '../Column';
import Columns from '../Columns';
import PropertyGroup from '../PropertyGroup';
import deepClone from '../../../utils/deepClone';

import './index.css';

const SizePanel = ({ object, onChange }) => {
	if (object.elementType === 'image') {
		return null;
	}

	const onPlotChange = (key, index, value) => {
		let path = deepClone(object.path);
		path[index][key] = value;
		console.log('>>> ', object);
		onChange('path', path);
	};

	return (
		<PropertyGroup object={object} className="sizePanel">
			<>
				{has(object, 'width', 'height') && (
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
				)}
				<Columns label="Position" inline>
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
				</Columns>
				{/* {has(object, 'rotate') && (
					<Columns label="Rotation">
						<Column
							type="number"
							label="angle"
							value={object.rotate}
							readOnly={true}
							onChange={(value) => onChange('rotate', +value)}
						/>
					</Columns>
				)} */}
				{has(object, 'path') && (
					<Columns label="Paths">
						{object?.path?.map((cordsObj, index) => {
							return (
								<Columns key={index} inline className="plotItemWrapper">
									<Column
										type="number"
										label="X"
										value={cordsObj.x}
										onChange={(value) => onPlotChange('x', index, +value)}
									/>
									<Column
										type="number"
										label="Y"
										value={cordsObj.y}
										onChange={(value) => onPlotChange('y', index, +value)}
									/>
								</Columns>
							);
						})}
					</Columns>
				)}
			</>
		</PropertyGroup>
	);
};

SizePanel.propTypes = {
	object: PropTypes.object,
	onChange: PropTypes.func.isRequired,
};

export default SizePanel;
