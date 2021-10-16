import React, { Component } from 'react';
import has from 'lodash/has';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import Columns from './Columns';
import Column from './Column';
import Input from '../widgets/Input';
import Select from '../widgets/Select';
import { blendModes, TYPES } from '../../constants';

export default class StylePanel extends React.Component {
	render() {
		let { object } = this.props;

		if (object.elementType === TYPES.GATEWAY) {
			return null;
		}

		return (
			<PropertyGroup>
				<Columns label="Fill">
					<Column>
						<Input
							type="color"
							value={object.fill}
							onChange={this.props.onChange.bind(this, 'fill')}
						/>
					</Column>
					<Column label="Opacity">
						<Input
							value={object.fillOpacity}
							style={{ width: 30 }}
							className={[styles.input, styles.integerInput]}
							onChange={(e) =>
								this.props.onChange('fillOpacity', e.target.value)
							}
						/>
					</Column>
				</Columns>
				<Columns label="Stroke">
					<Column>
						<Input
							type="color"
							value={object.stroke}
							onChange={this.props.onChange.bind(this, 'stroke')}
						/>
					</Column>
					<Column label="width">
						<Input
							value={object.strokeWidth}
							style={{ width: 30 }}
							className={[styles.input, styles.integerInput]}
							onChange={(e) =>
								this.props.onChange('strokeWidth', e.target.value)
							}
						/>
					</Column>
					<Column showIf={has(object, 'radius')} label="radius">
						<Input
							value={object.radius}
							style={[styles.input, styles.integerInput, { width: 30 }]}
							onChange={(e) => this.props.onChange('radius', e.target.value)}
						/>
					</Column>
				</Columns>
				<Columns label="Blending">
					<Column>
						<Select
							name="Blending"
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
