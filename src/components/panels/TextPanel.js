import React, { Component } from 'react';
import has from 'lodash/has';

import PropertyGroup from './PropertyGroup';
import SwitchState from './SwitchState';
import Column from './Column';
import WebFont from 'webfontloader';
import Input from '../widgets/Input';
import Select from '../widgets/Select';
import { fontFamilies } from '../../constants';
import Columns from './Columns';

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
				<Columns label="Styles" rowInline>
					<Column>
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
				</Columns>
				{has(object, 'fontSize') && (
					<Column
						label="Size"
						value={object.fontSize}
						onChange={(e) => this.props.onChange('fontSize', e.target.value)}
					/>
				)}
				<Column
					label="Text"
					value={object.text}
					onChange={(e) => this.props.onChange('text', e.target.value)}
				/>
				<Columns label="Font Family" rowInline>
					<Select
						value={object.fontFamily}
						options={fontFamilies
							.sort(this.sortFonts)
							.map(({ name, family }) => ({
								label: name,
								value: family,
							}))}
						onChange={this.handleFontFamilyChange}
					/>
				</Columns>
			</PropertyGroup>
		);
	}
}

export default TextPanel;
