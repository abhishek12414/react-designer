import React from 'react';
import { modes } from '../../../constants';
import Icon from '../Icon';
import Label from './Label';

import Vector from './Vector';
import BezierEditor from '../editors/BezierEditor';

export default class Path extends Vector {
	static meta = {
		icon: <Icon icon={'polygon'} size={24} />,
		mode: modes.DRAW_PATH,
		editor: BezierEditor,
		initial: {
			fill: '#ffffff',
			fillOpacity: 0,
			strokeWidth: 2,
			stroke: '#000000',
			closed: false,
			isHidden: false,
			rotate: 0,
			moveX: 0,
			moveY: 0,
			path: [],
			strokeWidth: 1,
			labelCoordinates: { x: 0, y: 0 },
		},
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
		let { object, isSelected } = this.props;
		const {
			fill,
			fillOpacity,
			strokeWidth,
			stroke,
			closed,
			name,
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
			isHidden,
		} = this.getObjectAttributes();

		return (
			<>
				{isSelected && (
					<path
						className={isHidden ? 'hidden' : ''}
						d={this.buildPath(object)}
						// common props
						fill={fill}
						fillOpacity={fillOpacity}
						stroke={'rgb(138, 180, 248)'}
						strokeWidth={+strokeWidth + 2}
						strokeOpacity={0.6}
						transform={transform}
						strokeLinecap="square"
						strokeMiterlimit={8}
					/>
				)}
				<path
					className={isHidden ? 'hidden' : ''}
					d={this.buildPath(object)}
					// common props
					ref={ref}
					index={index}
					transform={transform}
					fill={closed ? fill : 'none'}
					fillOpacity={fillOpacity}
					stroke={stroke}
					strokeWidth={strokeWidth}
					strokeDasharray={type == 'map' ? 0 : 4}
					onMouseOver={onMouseOver}
				/>
				<Label
					className={isHidden ? 'hidden' : ''}
					x={labelCoordinates.x}
					y={labelCoordinates.y}
					label={name}
				/>
			</>
		);
	}
}
