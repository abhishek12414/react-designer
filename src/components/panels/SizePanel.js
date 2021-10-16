import React, { Component } from 'react';
import has from 'lodash/has';

import PropertyGroup from './PropertyGroup';
import Columns from './Columns';
import Column from './Column';
import Button from '../widgets/Button';

export default class SizePanel extends React.Component {
	onLabelPosChange(key, value) {
		this.props.onChange('labelCoordinates', {
			...this.props.object.labelCoordinates,
			[key]: value,
		});
	}

	render() {
		let { object } = this.props;
		return (
			<PropertyGroup object={object}>
				<Columns label="Name">
					<Column
						label="Object Name"
						value={object.name || ''}
						inputStyle={{ width: '130px' }}
						onChange={this.props.onChange.bind(this, 'name')}
					/>
				</Columns>
				{has(object.labelCoordinates, 'x', 'y') && (
					<Columns label="Label Position">
						<Column
							showIf={has(object.labelCoordinates, 'x')}
							label="x"
							value={object.labelCoordinates.x}
							onChange={(value) => this.onLabelPosChange('x', value)}
						/>
						<Column
							showIf={has(object.labelCoordinates, 'y')}
							label="y"
							value={object.labelCoordinates.y}
							onChange={(value) => this.onLabelPosChange('y', value)}
						/>
					</Columns>
				)}
				{has(object, 'width', 'height') && (
					<Columns label="Size">
						<Column
							showIf={has(object, 'width')}
							label="width"
							value={object.width}
							onChange={this.props.onChange.bind(this, 'width')}
						/>
						<Column
							showIf={has(object, 'height')}
							label="height"
							value={object.height}
							onChange={this.props.onChange.bind(this, 'height')}
						/>
					</Columns>
				)}
				<Columns label="Position">
					<Column
						showIf={has(object, 'x')}
						label="top"
						value={object.x}
						readOnly={true}
						onChange={this.props.onChange.bind(this, 'x')}
					/>
					<Column
						showIf={has(object, 'y')}
						label="top"
						value={object.y}
						readOnly={true}
						onChange={this.props.onChange.bind(this, 'y')}
					/>
				</Columns>
				{/* {has(object, "rotate") && (
          <Columns label="Rotation">
            <Column
              label="angle"
              value={object.rotate}
              readOnly={true}
              onChange={this.props.onChange.bind(this, "rotate")}
            />
          </Columns>
        )} */}
				<Columns label="Shape">
					<p style={{ margin: 0, textTransform: 'capitalize' }}>
						{object.elementType}
					</p>
				</Columns>
				<Columns label="Type">
					<p style={{ margin: 0, textTransform: 'capitalize' }}>
						{object.type}
					</p>
				</Columns>
				<Columns label="Delete">
					<Button onClick={this.props.onDelete}>Delete Shape</Button>
				</Columns>
			</PropertyGroup>
		);
	}
}
