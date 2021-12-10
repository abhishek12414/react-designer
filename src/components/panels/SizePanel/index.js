import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';

import Column from '../Column';
import Columns from '../Columns';
import PropertyGroup from '../PropertyGroup';
import deepClone from '../../../utils/deepClone';

import './index.css';
import { TYPES } from '../../../constants';

const SizePanel = ({
	object,
	onChange,
	layoutDimension,
	transformedLayout,
}) => {
	const transformedDimension = {
		transformWidth: transformedLayout.layoutWidth / layoutDimension.width,
		transformHeight: transformedLayout.layoutHeight / layoutDimension.height,
	};

	const onPlotChange = (key, index, value) => {
		let path = deepClone(object.path);
		path[index][key] = value;
		onChange({ path: path });
	};

	const onValueChange = (key, value) => {
		let tValue;
		switch (key) {
			case '_x':
				tValue = +(value * transformedDimension.transformWidth).toFixed(2);
				onChange({ [key]: value, x: tValue });
				break;

			case '_y':
				tValue = +(
					transformedLayout.layoutHeight -
					value * transformedDimension.transformHeight -
					(object?.height ?? 0)
				).toFixed(2);
				onChange({ [key]: value, y: tValue });
				break;
			default:
				break;
		}
	};

	return (
		<PropertyGroup object={object} className="sizePanel">
			{/* <Columns label="Position" inline>
				<Column
					label="X"
					type="number"
					showIf={has(object, 'x')}
					value={object.x}
					readOnly={true}
					onChange={(value) => onChange({ x: +value })}
				/>
				<Column
					label="Y"
					type="number"
					showIf={has(object, 'y')}
					value={object.y}
					readOnly={true}
					onChange={(value) => onChange({ y: +value })}
				/>
			</Columns> */}
			<Columns label="Position" inline>
				<Column
					label="X"
					type="number"
					showIf={has(object, 'x')}
					value={object._x ?? ''}
					readOnly={true}
					onChange={(value) => onValueChange('_x', +value)}
				/>
				<Column
					label="Y"
					type="number"
					showIf={has(object, 'y')}
					value={object._y ?? ''}
					readOnly={true}
					onChange={(value) => onValueChange('_y', +value)}
				/>
			</Columns>

			{has(object, 'width', 'height') && object.elementType !== TYPES.GATEWAY && (
				<Columns label="Size" inline>
					<Column
						label="W"
						type="number"
						showIf={has(object, 'width')}
						value={object.width ?? ''}
						onChange={(value) => onChange({ width: +value })}
					/>
					<Column
						label="H"
						type="number"
						showIf={has(object, 'height')}
						value={object.height ?? ''}
						onChange={(value) => onChange({ height: +value })}
					/>
				</Columns>
			)}

			{has(object, 'radius') && (
				<Columns label="Radius" rowInline>
					<Column
						type="number"
						value={object.radius}
						onChange={(value) => onChange({ radius: +value })}
					/>
				</Columns>
			)}
			{/* {has(object, 'rotate') && (
					<Columns label="Rotation" rowInline>
						<Column
							type="number"
							value={object.rotate}
							readOnly={true}
							onChange={(value) => onChange({'rotate': +value})}
						/>
					</Columns>
				)} */}
			{/* {has(object, 'path') && (
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
				)} */}
		</PropertyGroup>
	);
};

SizePanel.propTypes = {
	object: PropTypes.object,
	layoutDimension: PropTypes.object,
	transformedLayout: PropTypes.object,
	onChange: PropTypes.func.isRequired,
};

export default SizePanel;
