import React, { Component } from 'react';
import { modes } from '../../../constants';
import Icon from '../Icon';
import Label from './Label';

import Vector from './Vector';
import BezierEditor from '../editors/BezierEditor';

export default class Path extends Vector {
	static meta = {
		initial: {
			fill: '#000',
			fillOpacity: 0.3,
			strokeWidth: 1,
			stroke: 'rgba(0,0,0,1)',
			closed: false,
			rotate: 0,
			moveX: 0,
			moveY: 0,
			path: [],
			strokeWidth: 1,
			labelCoordinates: { x: 30, y: 30 },
		},
		mode: modes.DRAW_PATH,
		icon: <Icon icon={'polygon'} size={30} />,
		editor: BezierEditor,
	};

	buildPath(object) {
		let { path, moveX, moveY, closed } = object;

		if (!path) {
			return ``;
		}

		let curves = path.map(({ x1, y1, x2, y2, x, y }, i) => {
			x1 = x1 || x;
			x2 = x2 || x;
			y1 = y1 || y;
			y2 = y2 || y;

			return `C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`;
		});

		// let curves = path.map(
		// 	({ x1, y1, x2, y2, x, y }, i) => `C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`
		// );

		let instructions = [`M ${moveX} ${moveY}`, ...curves];

		if (closed) {
			instructions = [...instructions, 'Z'];
		}

		return instructions.join('\n');
	}

	getTransformMatrix({ rotate, x, y, moveX, moveY }) {
		return `
      translate(${x - moveX} ${y - moveY})
      rotate(${rotate} ${x} ${y})
    `;
	}

	render() {
		let { object } = this.props;
		const {
			fill,
			fillOpacity,
			strokeWidth,
			stroke,
			closed,
			rotate,
			moveX,
			moveY,
			path,
			labelCoordinates,
			elementType,
			x,
			y,
			type,
			transform,
			ref,
			onMouseOver,
			index,
		} = this.getObjectAttributes();

		return (
			<>
				<path
					style={this.getStyle(object)}
					d={this.buildPath(object)}
					// common props
					fill={closed ? fill : 'none'}
					fillOpacity={fillOpacity}
					stroke={stroke}
					strokeWidth={strokeWidth}
					strokeDasharray={type == 'map' ? 0 : 4}
					ref={ref}
					onMouseOver={onMouseOver}
					transform={transform}
					index={index}
				/>
				<Label x={labelCoordinates.x} y={labelCoordinates.y} label={name} />
			</>
		);
	}
}
