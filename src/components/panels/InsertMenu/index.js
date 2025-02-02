import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './index.css';

import { TYPES, SHAPES } from '../../../constants';
import Icon from '../../shared/Icon';
import Tab from '../../widgets/Tab';
import Button from '../../widgets/Button';
import Columns from '../Columns';

class InsertMenu extends Component {
	getKeys(type, tools) {
		switch (type) {
			case TYPES.MAP:
				return Object.keys(tools).filter((i) => i !== SHAPES.gateway);
			case TYPES.TRACK:
				return Object.keys(tools).filter((i) => i === SHAPES.polygon);
			case TYPES.GATEWAY:
				return Object.keys(tools).filter((i) => i === SHAPES.gateway);
			default:
				return [];
		}
	}

	render() {
		let {
			hasImage,
			currentTool,
			tools,
			onSelect,
			type,
			onTypeChange,
			onAddImageClick,
		} = this.props;

		// hide tools.image;
		tools = Object.keys(tools).reduce((acc, key) => {
			if (key === SHAPES.image) {
				return acc;
			} else {
				return { ...acc, [key]: tools[key] };
			}
		}, {});

		const iconStyle = {
			width: '18px',
			height: '18px',
		};

		if (!hasImage) {
			iconStyle.fill = 'black';
		}

		return (
			<div className="insertMenu">
				<Tab
					options={Object.values(TYPES)}
					activeValue={type}
					onSelect={(value) => onTypeChange(value)}
				/>
				<ul className="toolBox">
					{this.getKeys(type, tools).map((elementType, i) => (
						<li
							className={cx(
								'toolBoxItem',
								currentTool === elementType && 'insertMenuActive'
							)}
							onMouseDown={onSelect.bind(this, elementType)}
							key={i}
						>
							<span className="mainIcon">{tools[elementType].meta.icon}</span>
							{elementType}
						</li>
					))}
				</ul>
				<div>
					<Columns label="Image" rowInline>
						<Button onClick={() => onAddImageClick()} disabled={hasImage}>
							<Icon size={24} icon="add" style={iconStyle} />
						</Button>
					</Columns>
				</div>
			</div>
		);
	}
}
InsertMenu.propTypes = {
	type: PropTypes.string,
	tools: PropTypes.object,
	hasImage: PropTypes.bool,
	currentTool: PropTypes.string,
	onTypeChange: PropTypes.func,
	onSelect: PropTypes.func.isRequired,
	onAddImageClick: PropTypes.func.isRequired,
};

export default InsertMenu;
