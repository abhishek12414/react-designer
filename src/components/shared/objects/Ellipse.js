import React from 'react';
import Icon from '../Icon';
import Label from './Label';

import Vector from './Vector';

export default class Ellipse extends Vector {
	static meta = {
		icon: <Icon icon={'ellipse'} size={30} />,
		initial: {
			width: 5,
			height: 5,
			rotate: 0,
			fill: '#000',
			fillOpacity: 0.3,
			strokeWidth: 1,
			stroke: 'rgba(0,0,0,1)',
			blendMode: 'normal',
			labelCoordinates: { x: 30, y: 30 },
		},
	};

	render() {
		const {
			width,
			height,
			rotate,
			fill,
			fillOpacity,
			strokeWidth,
			stroke,
			blendMode,
			labelCoordinates,
			elementType,
			name,
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
				<ellipse
					style={this.getStyle()}
					rx={width / 2}
					ry={height / 2}
					cx={x + width / 2}
					cy={y + height / 2}
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
				<Label x={labelCoordinates.x} y={labelCoordinates.y} label={name} />
			</>
		);
	}
}
