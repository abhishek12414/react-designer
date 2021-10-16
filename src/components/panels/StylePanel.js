import React, { Component } from 'react';
import has from 'lodash/has';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import Columns from './Columns';
import Column from './Column';
import Input from '../widgets/Input';
import Select from '../widgets/Select';
import { blendModes } from '../../constants';

export default class StylePanel extends Component {
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
							options={blendModes}
							onChange={(e) => this.props.onChange('blendMode', e.target.value)}
						/>
					</Column>
				</Columns>
			</PropertyGroup>
		);
	}
}
