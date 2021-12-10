import React from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';

import './index.css';

import { clusterOptions, TYPES } from '../../../constants';

import Column from '../Column';
import Columns from '../Columns';
import PropertyGroup from '../PropertyGroup';
import Select from '../../widgets/Select';

const GatewayPanel = ({
	object,
	onChange,
	layoutDimension,
	transformedLayout,
}) => {
	const transformedDimension = {
		transformWidth: transformedLayout.layoutWidth / layoutDimension.width,
		transformHeight: transformedLayout.layoutHeight / layoutDimension.height,
	};

	if (object.elementType !== TYPES.GATEWAY) {
		return null;
	}

	const onValueChange = (key, value) => {
		let tValue;
		switch (key) {
			case '_x':
				tValue = value * transformedDimension.transformWidth;
				onChange({ [key]: value, x: tValue });
				break;

			case '_y':
				tValue =
					transformedLayout.layoutHeight -
					value * transformedDimension.transformHeight -
					(object?.height ?? 0);
				onChange({ [key]: value, y: tValue });
				break;
			default:
				onChange({ [key]: value });
				break;
		}
	};

	const onPlotValueChange = (key, value) => {
		let tValue;
		switch (key) {
			case '_x':
				tValue = value * transformedDimension.transformWidth;
				onChange({ plot: { ...object.plot, [key]: value, x: tValue } });
				break;

			case '_y':
				tValue =
					transformedLayout.layoutHeight -
					value * transformedDimension.transformHeight -
					(object?.height ?? 0);

				onChange({ plot: { ...object.plot, [key]: value, y: tValue } });
				break;
			default:
				onChange({ plot: { ...object.plot, [key]: value } });
				break;
		}
	};

	return (
		<PropertyGroup className="gatewayPanel">
			<Columns label="Mac ID" showIf={has(object, 'macId')}>
				<Column
					label="Mac ID"
					value={object.macId}
					onChange={(value) => onChange({ macId: value })}
				/>
			</Columns>
			<Columns
				label="Cluster Type"
				rowInline
				showIf={has(object, 'gatewayClusterType')}
			>
				<Select
					name="gatewayClusterType"
					value={object.gatewayClusterType}
					options={clusterOptions}
					onChange={(e) => onChange({ gatewayClusterType: e.target.value })}
				/>
			</Columns>
			<Columns label="Physical Coords" inline>
				<Column
					showIf={has(object, 'x')}
					label="x"
					type="number"
					labelClass="label"
					value={object._x}
					onChange={(value) => onValueChange('_x', value)}
				/>
				<Column
					showIf={has(object, 'y')}
					label="y"
					type="number"
					labelClass="label"
					value={object._y}
					onChange={(value) => onValueChange('_y', value)}
				/>
				<Column
					showIf={has(object, 'z')}
					label="z"
					type="number"
					labelClass="label"
					value={object._z}
					onChange={(value) => onValueChange('_z', value)}
				/>
			</Columns>
			<Columns label="Plot Coords" inline>
				<Column
					showIf={has(object.plot, 'x')}
					label="x"
					type="number"
					labelClass="label"
					value={object.plot._x}
					onChange={(value) => onPlotValueChange('_x', value)}
				/>
				<Column
					showIf={has(object.plot, 'y')}
					label="y"
					type="number"
					labelClass="label"
					value={object.plot._y}
					onChange={(value) => onPlotValueChange('_y', value)}
				/>
				<Column
					showIf={has(object.plot, 'z')}
					label="z"
					type="number"
					labelClass="label"
					value={object.plot._z}
					onChange={(value) => onPlotValueChange('_z', value)}
				/>
			</Columns>
		</PropertyGroup>
	);
};

GatewayPanel.propTypes = {
	object: PropTypes.object,
	objects: PropTypes.array,
	layoutDimension: PropTypes.object,
	transformedLayout: PropTypes.object,
	onChange: PropTypes.func.isRequired,
};

export default GatewayPanel;
