import React, { Component } from 'react';
import _ from 'lodash';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import SwitchState from './SwitchState';
import Columns from './Columns';
import Column from './Column';
import ColorInput from './ColorInput';
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
				<Columns label="Fill" showIf={_.has(object, 'fill')}>
					<Column>
						<ColorInput
							value={object.fill}
							onChange={this.props.onChange.bind(this, 'fill')}
						/>
					</Column>
				</Columns>
				<Columns label="Stroke" showIf={_.has(object, 'stroke')}>
					<Column>
						<ColorInput
							value={object.stroke}
							onChange={this.props.onChange.bind(this, 'stroke')}
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
					<Column showIf={_.has(object, 'radius')} label="radius">
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
