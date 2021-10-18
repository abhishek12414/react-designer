import React, { Component } from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import Columns from './Columns';
import Column from './Column';
import Select from '../widgets/Select';
import { blendModes, TYPES } from '../../constants';

class StylePanel extends Component {
	render() {
		let { object } = this.props;

		if (object.elementType === TYPES.GATEWAY) {
			return null;
		}

		return (
			<PropertyGroup>
				<Columns label="Fill" inline>
					<Column
						type="color"
						value={object.fill}
						onChange={this.props.onChange.bind(this, 'fill')}
					/>
					<Column
						type="number"
						label="Opacity"
						value={object.fillOpacity}
						style={{ width: 30 }}
						className={[styles.input, styles.integerInput]}
						onChange={(e) => this.props.onChange('fillOpacity', e.target.value)}
					/>
				</Columns>
				<Columns label="Stroke" inline>
					<Column
						type="color"
						value={object.stroke}
						onChange={this.props.onChange.bind(this, 'stroke')}
					/>
					<Column
						label="width"
						type="number"
						value={object.strokeWidth}
						style={{ width: 30 }}
						className={[styles.input, styles.integerInput]}
						onChange={(e) => this.props.onChange('strokeWidth', e.target.value)}
					/>
					<Column
						showIf={has(object, 'radius')}
						label="radius"
						type="number"
						value={object.radius}
						style={[styles.input, styles.integerInput, { width: 30 }]}
						onChange={(e) => this.props.onChange('radius', e.target.value)}
					/>
				</Columns>
				<Columns label="Blending" rowInline>
					<Select
						name="Blending"
						value={object.blendMode}
						options={blendModes}
						onChange={(e) => this.props.onChange('blendMode', e.target.value)}
					/>
				</Columns>
			</PropertyGroup>
		);
	}
}

StylePanel.propTypes = {
	object: PropTypes.object,
	onChange: PropTypes.func.isRequired,
};

export default StylePanel;
