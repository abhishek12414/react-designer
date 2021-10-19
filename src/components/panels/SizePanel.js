import React, { Component } from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';

import PropertyGroup from './PropertyGroup';
import Columns from './Columns';
import Column from './Column';
import Button from '../widgets/Button';

class SizePanel extends Component {
	onLabelPosChange(key, value) {
		this.props.onChange('labelCoordinates', {
			...this.props.object.labelCoordinates,
			[key]: value,
		});
	}

	render() {
		let { object, onChange } = this.props;
		return (
			<PropertyGroup object={object}>
				<Columns label="Label Property">
					<Column
						label="Name"
						value={object.name || ''}
						inputStyle={{ width: '130px' }}
						onChange={onChange.bind(this, 'name')}
					/>
					{has(object.labelCoordinates, 'x', 'y') && (
						<div style={{ display: 'flex' }}>
							<Column
								label="X"
								type="number"
								showIf={has(object.labelCoordinates, 'x')}
								value={object.labelCoordinates.x}
								onChange={(value) => this.onLabelPosChange('x', value)}
							/>
							<Column
								label="Y"
								type="number"
								showIf={has(object.labelCoordinates, 'y')}
								value={object.labelCoordinates.y}
								onChange={(value) => this.onLabelPosChange('y', value)}
							/>
						</div>
					)}
				</Columns>

				{has(object, 'width', 'height') && (
					<Columns label="Size" inline>
						<Column
							disabled
							label="W"
							type="number"
							showIf={has(object, 'width')}
							value={object.width}
							onChange={onChange.bind(this, 'width')}
						/>
						<Column
							disabled
							label="H"
							type="number"
							showIf={has(object, 'height')}
							value={object.height}
							onChange={onChange.bind(this, 'height')}
						/>
					</Columns>
				)}
				<Columns label="Position" inline>
					<Column
						disabled
						label="X"
						type="number"
						showIf={has(object, 'x')}
						value={object.x}
						readOnly={true}
						onChange={onChange.bind(this, 'x')}
					/>
					<Column
						disabled
						label="Y"
						type="number"
						showIf={has(object, 'y')}
						value={object.y}
						readOnly={true}
						onChange={onChange.bind(this, 'y')}
					/>
				</Columns>
				{/* {has(object, "rotate") && (
          <Columns label="Rotation">
            <Column
              label="angle"
              value={object.rotate}
              readOnly={true}
              onChange={onChange.bind(this, "rotate")}
            />
          </Columns>
        )} */}
				<Columns label="Shape" rowInline>
					<p style={{ margin: 0, textTransform: 'capitalize' }}>
						{object.elementType}
					</p>
				</Columns>
				<Columns label="Type" rowInline>
					<p style={{ margin: 0, textTransform: 'capitalize' }}>
						{object.type}
					</p>
				</Columns>
				<Columns label="Delete" rowInline>
					<Button onClick={this.props.onDelete}>Delete Shape</Button>
				</Columns>
			</PropertyGroup>
		);
	}
}

SizePanel.propTypes = {
	object: PropTypes.object,
	onDelete: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default SizePanel;
