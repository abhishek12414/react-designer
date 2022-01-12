import React from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';

import PropertyGroup from './PropertyGroup';
import Columns from './Columns';
import Column from './Column';
import Button from '../widgets/Button';
import { TYPES } from '../../constants';
import Icon from '../shared/Icon';
import Input from '../widgets/Input';

const StylePanel = ({ object, onChange, onDelete, onImageEditClick }) => {
	if (object.elementType === TYPES.GATEWAY) {
		return null;
	}

	return (
		<PropertyGroup>
			<Columns label="Fill" rowInline showIf={has(object, 'fill')}>
				<Column
					type="color"
					value={object.fill}
					onChange={(value) => onChange({ fill: value })}
				/>
			</Columns>
			<Columns label="Opacity" rowInline showIf={has(object, 'fillOpacity')}>
				<Column>
					<Input
						type="number"
						value={object.fillOpacity}
						style={{ width: 30 }}
						min={0}
						max={1}
						step={.1}
						error={object?.errors?.fillOpacity}
						onChange={(e) => onChange({ fillOpacity: +e.target.value })}
					/>
				</Column>
			</Columns>
			<Columns label="Action" rowInline inline showIf={has(object, 'href')}>
				<Button title="Edit" onClick={() => onImageEditClick()}>
					<Icon
						icon="pencil"
						size={24}
						style={{ width: 16, height: 16, fill: 'black' }}
					/>
				</Button>
				<Button
					title="Delete"
					style={{ marginLeft: 8 }}
					onClick={() => onDelete()}
				>
					<Icon
						icon="delete"
						size={24}
						style={{ width: 16, height: 16, fill: 'black' }}
					/>
				</Button>
			</Columns>
			<Columns label="Stroke" inline showIf={has(object, 'stroke', 'width')}>
				<Column
					showIf={has(object, 'stroke')}
					type="color"
					value={object.stroke}
					onChange={(value) => onChange({ stroke: value })}
				/>
				<Column
					showIf={has(object, 'strokeWidth')}
					label="width"
					type="number"
					value={object.strokeWidth}
					style={{ width: 30 }}
					onChange={(value) => onChange({ strokeWidth: value })}
				/>
			</Columns>
		</PropertyGroup>
	);
};

StylePanel.propTypes = {
	object: PropTypes.object,
	onChange: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	onImageEditClick: PropTypes.func,
};

export default StylePanel;
