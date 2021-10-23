import React, { Component, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './index.css';

function ScaleAnchor({ boundingBox, onMouseDown }) {
	let style = {
		marginTop: boundingBox.height + 5,
		marginLeft: boundingBox.width + 5,
	};

	let [anchorHovered, setAnchorHovered] = useState(false);

	return (
		<div
			className={cx('anchor', anchorHovered && 'anchorHovered', 'scaleAnchor')}
			style={{
				...style,
			}}
			onMouseOver={() => setAnchorHovered(true)}
			onMouseOut={() => setAnchorHovered(false)}
			onMouseDown={onMouseDown}
		/>
	);
}

ScaleAnchor.propTypes = {
	boundingBox: PropTypes.object.isRequired,
	onMouseDown: PropTypes.func.isRequired,
};

function RotateAnchor({ boundingBox, onMouseDown }) {
	let style = {
		marginLeft: boundingBox.width + 5,
	};

	let [anchorHovered, setAnchorHovered] = useState(false);

	return (
		<div
			className={cx('anchor', anchorHovered && 'anchorHovered', 'rotateAnchor')}
			style={{
				...style,
			}}
			onMouseOver={() => setAnchorHovered(true)}
			onMouseOut={() => setAnchorHovered(false)}
			onMouseDown={onMouseDown}
		/>
	);
}

RotateAnchor.propTypes = {
	boundingBox: PropTypes.object.isRequired,
	onMouseDown: PropTypes.func.isRequired,
};

class Handler extends Component {
	onMouseDown(event) {
		// event.preventDefault();

		if (event.target.classList.contains('handler')) {
			this.props.onDrag(event);
		}
	}

	render() {
		let {
			boundingBox,
			canRotate,
			canResize,
			onMouseLeave,
			onDoubleClick,
			onResize,
			onRotate,
		} = this.props;

		let handlerStyle = {
			...boundingBox,
			width: boundingBox.width + 10,
			height: boundingBox.height + 10,
			left: boundingBox.left - 5,
			top: boundingBox.top - 5,
			transform: `rotate(${boundingBox.rotate}deg)`,
		};

		return (
			<div
				className={'handler'}
				style={handlerStyle}
				onMouseLeave={onMouseLeave}
				onDoubleClick={onDoubleClick}
				onMouseDown={this.onMouseDown.bind(this)}
			>
				{canRotate && (
					<RotateAnchor onMouseDown={onRotate} boundingBox={boundingBox} />
				)}
				{canResize && (
					<ScaleAnchor onMouseDown={onResize} boundingBox={boundingBox} />
				)}
			</div>
		);
	}
}

Handler.propTypes = {
	canRotate: PropTypes.bool,
	canResize: PropTypes.bool,
	boundingBox: PropTypes.object.isRequired,
	onDrag: PropTypes.func.isRequired,
	onResize: PropTypes.func.isRequired,
	onRotate: PropTypes.func,
	onMouseLeave: PropTypes.func.isRequired,
	onDoubleClick: PropTypes.func.isRequired,
};

export default Handler;
