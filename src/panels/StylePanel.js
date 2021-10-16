import React, { Component } from 'react';
import has from 'lodash/has';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import SwitchState from './SwitchState';
import Columns from './Columns';
import Column from './Column';
import Input from '../components/widgets/Input';
import Select from '../components/widgets/Select';

export default class StylePanel extends Component {
	modes = [
		'normal',
		'multiply',
		'screen',
		'overlay',
		'darken',
		'lighten',
		'color-dodge',
		'color-burn',
		'hard-light',
		'soft-light',
		'difference',
		'exclusion',
		'hue',
		'saturation',
		'color',
		'luminosity',
	];

	render() {
		let { object } = this.props;
		return (
			<PropertyGroup>
				<Columns label="Fill" showIf={has(object, 'fill')}>
					<Column>
						<Input
							type="color"
							value={object.fill}
							onChange={(e) => this.props.onChange(e.target.value, 'fill')}
						/>
					</Column>
				</Columns>
				<Columns label="Stroke" showIf={has(object, 'stroke')}>
					<Column>
						<Input
							type="color"
							value={object.stroke}
							onChange={(e) => this.props.onChange(e.target.value, 'stroke')}
						/>
					</Column>
					<Column label="width">
						<Input
							style={{ ...styles.input, ...styles.integerInput, width: 30 }}
							onChange={(e) =>
								this.props.onChange('strokeWidth', e.target.value)
							}
							value={object.strokeWidth}
						/>
					</Column>
					<Column showIf={has(object, 'radius')} label="radius">
						<Input
							style={{ ...styles.input, ...styles.integerInput, width: 30 }}
							onChange={(e) => this.props.onChange('radius', e.target.value)}
							value={object.radius}
						/>
					</Column>
				</Columns>
				<Columns label="Blending">
					<Column>
						<Select
							style={styles.select}
							value={object.blendMode}
							options={this.modes}
							onChange={(e) => this.props.onChange('blendMode', e.target.value)}
						/>
					</Column>
				</Columns>
			</PropertyGroup>
		);
	}
}
