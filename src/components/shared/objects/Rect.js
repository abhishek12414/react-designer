import React from 'react';
import Icon from '../Icon';
import Label from './Label';

import Vector from './Vector';

export default class Rect extends Vector {
	static meta = {
		icon: <Icon icon={'rect'} size={30} />,
		initial: {
			width: 5,
			height: 5,
			fill: '#000',
			fillOpacity: 0.3,
			strokeWidth: 1,
			stroke: 'rgba(0,0,0,1)',
			radius: 0,
			blendMode: 'normal',
			rotate: 0,
			labelCoordinates: { x: 30, y: 30 },
		},
	};

	render() {
		const {
			width,
			height,
			fill,
			fillOpacity,
			strokeWidth,
			stroke,
			radius,
			blendMode,
			rotate,
			labelCoordinates,
			elementType,
			x,
			y,
			name,
			type,
			transform,
			ref,
			onMouseOver,
			index,
		} = this.getObjectAttributes();

		return (
			<>
				<rect
					style={this.getStyle()}
					x={x}
					y={y}
					width={width}
					height={height}
					// common props
					fill={fill}
					fillOpacity={fillOpacity}
					stroke={stroke}
					strokeWidth={strokeWidth}
					strokeDasharray={type == 'map' ? 0 : 4}
					ref={ref}
					onMouseOver={onMouseOver}
					transform={transform}
					index={index}
				/>
				<Label
					x={labelCoordinates.x}
					y={labelCoordinates.y}
					label={name || ''}
				/>
			</>
		);
	}
}
