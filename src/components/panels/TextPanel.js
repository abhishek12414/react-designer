import React, { Component } from 'react';
import has from 'lodash/has';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import SwitchState from './SwitchState';
import Column from './Column';
import WebFont from 'webfontloader';
import Input from '../widgets/Input';
import Select from '../widgets/Select';
import { fontFamilies } from '../../constants';

class TextPanel extends Component {
	handleFontFamilyChange = (e) => {
		const value = e.target.value;
		WebFont.load({
			google: {
				families: [value],
			},
		});
		this.props.onChange('fontFamily', value);
	};

	sortFonts = (f1, f2) =>
		f1.name.toLowerCase() > f2.name.toLowerCase()
			? 1
			: f1.name.toLowerCase() < f2.name.toLowerCase()
			? -1
			: 0;

	render() {
		let { object } = this.props;
		return (
			<PropertyGroup showIf={has(object, 'text')}>
				<div style={styles.columns}>
					<Column style={{ float: 'right', marginRight: 15 }}>
						{has(object, 'fontWeight') && (
							<SwitchState
								icon="format-bold"
								defaultValue={'normal'}
								nextState={'bold'}
								value={object.fontWeight}
								onChange={this.props.onChange.bind(this, 'fontWeight')}
							/>
						)}
						{has(object, 'fontStyle') && (
							<SwitchState
								icon="format-italic"
								defaultValue={'normal'}
								nextState={'italic'}
								value={object.fontStyle}
								onChange={this.props.onChange.bind(this, 'fontStyle')}
							/>
						)}
						{has(object, 'textDecoration') && (
							<SwitchState
								icon="format-underline"
								defaultValue={'none'}
								nextState={'underline'}
								value={object.textDecoration}
								onChange={this.props.onChange.bind(this, 'textDecoration')}
							/>
						)}
					</Column>
					<Column style={{ float: 'right' }}>
						{has(object, 'fontSize') && (
							<Input
								style={{ ...styles.input, ...styles.integerInput, width: 35 }}
								value={object.fontSize}
								onChange={(e) =>
									this.props.onChange('fontSize', e.target.value)
								}
							/>
						)}
					</Column>
					<Column style={{ float: 'right', marginRight: 10 }}>
						<Select
							style={styles.select}
							value={object.fontFamily}
							options={fontFamilies
								.sort(this.sortFonts)
								.map(({ name, family }) => ({
									label: name,
									value: family,
								}))}
							onChange={this.handleFontFamilyChange}
						/>
					</Column>
					<div style={{ ...styles.row, paddingTop: 25, paddingRight: 10 }}>
						<Input
							style={{ ...styles.input, ...styles.textInput }}
							onChange={(e) => this.props.onChange('text', e.target.value)}
							value={object.text}
						/>
					</div>
				</div>
			</PropertyGroup>
		);
	}
}

export default TextPanel;
