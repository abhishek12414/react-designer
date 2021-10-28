import React, { Component } from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';

import PropertyGroup from './PropertyGroup';
import Columns from './Columns';
import Column from './Column';
import Select from '../widgets/Select';
import { blendModes, TYPES } from '../../constants';

class StylePanel extends Component {
	render() {
		let { object, onChange } = this.props;

		if (object.elementType === TYPES.GATEWAY) {
			return null;
		}

		return (
			<PropertyGroup>
				<Columns label="Fill" rowInline>
					<Column
						type="color"
						value={object.fill}
						onChange={onChange.bind(this, 'fill')}
					/>
				</Columns>
				<Columns label="Opacity" rowInline>
					<Column
						type="number"
						value={object.fillOpacity}
						style={{ width: 30 }}
						onChange={onChange.bind(this, 'fillOpacity')}
					/>
				</Columns>
				<Columns label="Stroke" inline>
					<Column
						type="color"
						value={object.stroke}
						onChange={onChange.bind(this, 'stroke')}
					/>
					<Column
						label="width"
						type="number"
						value={object.strokeWidth}
						style={{ width: 30 }}
						onChange={onChange.bind(this, 'strokeWidth')}
					/>
					<Column
						showIf={has(object, 'radius')}
						label="radius"
						type="number"
						value={object.radius}
						onChange={onChange.bind(this, 'radius')}
					/>
				</Columns>
				{/* <Columns label="Blending" rowInline>
					<Select
						name="Blending"
						value={object.blendMode}
						options={blendModes}
						onChange={(e) => onChange('blendMode', e.target.value)}
					/>
				</Columns> */}
			</PropertyGroup>
		);
	}
}

StylePanel.propTypes = {
	object: PropTypes.object,
	onChange: PropTypes.func.isRequired,
};

export default StylePanel;
