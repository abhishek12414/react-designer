import React, { Component } from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';

import PropertyGroup from './PropertyGroup';
import Columns from './Columns';
import Column from './Column';
import Select from '../widgets/Select';
import Button from '../widgets/Button';
import { blendModes, TYPES } from '../../constants';
import Icon from '../shared/Icon';

const StylePanel = ({ object, onChange }) => {
	if (object.elementType === TYPES.GATEWAY) {
		return null;
	}

	return (
		<PropertyGroup>
			{has(object, 'fill') && (
				<Columns label="Fill" rowInline>
					<Column
						type="color"
						value={object.fill}
						onChange={(value) => onChange('fill', value)}
					/>
				</Columns>
			)}
			{has(object, 'fillOpacity') && (
				<Columns label="Opacity" rowInline>
					<Column
						type="number"
						value={object.fillOpacity}
						style={{ width: 30 }}
						onChange={(value) => onChange('fillOpacity', value)}
					/>
				</Columns>
			)}
			{has(object, 'href') && (
				<Columns label="Action" rowInline inline>
					<Button title="Edit" onClick={() => {}}>
						<Icon
							icon="pencil"
							size={24}
							style={{ width: 16, height: 16, fill: 'black' }}
						/>
					</Button>

					<Button title="Delete" style={{ marginLeft: 8 }} onClick={() => {}}>
						<Icon
							icon="delete"
							size={24}
							style={{ width: 16, height: 16, fill: 'black' }}
						/>
					</Button>
				</Columns>
			)}
			{has(object, 'stroke', 'width') && (
				<Columns label="Stroke" inline>
					{has(object, 'stroke') && (
						<Column
							type="color"
							value={object.stroke}
							onChange={(value) => onChange('stroke', value)}
						/>
					)}
					{has(object, 'strokeWidth') && (
						<Column
							label="width"
							type="number"
							value={object.strokeWidth}
							style={{ width: 30 }}
							onChange={(value) => onChange('strokeWidth', value)}
						/>
					)}
					{has(object, 'radius') && (
						<Column
							showIf={has(object, 'radius')}
							label="radius"
							type="number"
							value={object.radius}
							onChange={(value) => onChange('radius', value)}
						/>
					)}
				</Columns>
			)}
			{/* <Columns label="Blending" rowInline>
					<Select
						name="Blending"
						value={object.blendMode}
						options={blendModes}
						onChange={(value) => onChange('blendMode', value)}
					/>
				</Columns> */}
		</PropertyGroup>
	);
};

StylePanel.propTypes = {
	object: PropTypes.object,
	onChange: PropTypes.func.isRequired,
};

export default StylePanel;
