import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

import { TYPES } from '../../../constants';
import { SHAPES } from '../../../constants';

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
		let { currentTool, tools, onSelect, type, onTypeChange } = this.props;

		return (
			<div className="insertMenu">
				<div className="tabWrapper">
					{Object.values(TYPES).map((key) => (
						<div
							key={key}
							className={cx('tabBar', type === key && 'activeTab')}
							onClick={() => onTypeChange(key)}
						>
							{key}
						</div>
					))}
				</div>
				<ul className="toolBox">
					{console.log(type, tools, this.getKeys(type, tools))}
					{this.getKeys(type, tools).map((elementType, i) => (
						<li
							className={cx(
								'toolBoxItem',
								currentTool === elementType && 'insertmenuactive'
							)}
							onMouseDown={onSelect.bind(this, elementType)}
							key={i}
						>
							<span className="mainIcon">{tools[elementType].meta.icon}</span>
							{elementType}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
InsertMenu.propTypes = {
	type: PropTypes.string,
	tools: PropTypes.object,
	currentTool: PropTypes.string,
	onTypeChange: PropTypes.func,
	onSelect: PropTypes.func.isRequired,
};

export default InsertMenu;
